import {
    Flex, Image, ListItem, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent,
    PopoverHeader, PopoverTrigger, Text, UnorderedList
} from "@chakra-ui/react"
import Code from "../../components/App/Code"
import Work, { WorkBody, WorkHeader, WorkSectionTitle } from "../../components/App/Work"

const metricsCode = `
...

@dataclass(repr=False)
class Metric:
    logits: torch.Tensor
    labels: torch.Tensor

    def __post_init__(self):
        # Metric can be built from a List,
        # For example: logits and labels loaded from a json.
        # Thus need to make sure the Lists are converted to tensors.
        if type(self.logits) != torch.Tensor:
            self.logits = torch.Tensor(self.logits)

        if type(self.labels) != torch.Tensor:
            self.labels = torch.Tensor(self.labels)

    @property
    def prediction(self) -> torch.Tensor:
        return torch.max(self.logits, -1)[1]

    @property
    def confidence(self) -> torch.Tensor:
        return self.softmax.max(dim=-1)[0]

    @property
    def consistency(self) -> torch.Tensor:
        """
        Compares the first prediction (i.e. with 0-std mask)
        to the rest of the predictions (i.e. with n-std masks)
        Consistency is when the [1:] predictions equals the [0] prediction.
        """
        return self.prediction[0] == self.prediction

    @property
    def accuracy(self) -> torch.Tensor:
        if len(self.logits.shape) == 2:  # Batch n-images, n-classes
            return self.prediction == self.labels
        return self.prediction == self.labels.repeat(len(self), 1)

    @property
    def batch_accuracy(self) -> float:
        return self.accuracy.float().mean(dim=1)

    @property
    def shape(self) -> torch.Tensor:
        return self.logits.shape

    @property
    def softmax(self) -> torch.Tensor:
        return softmax(self.logits, dim=-1)

    @property
    def pairwise_distance(self) -> torch.Tensor:
        """
        Computes the L1-norm between the 0-th softmax and (n+1)-softmax
        Used to show the difference in predictions between n-batches predictions, ex:
            self.softmax[0] is the reference
            self.softmax[1:] are the softmax we compute the L1-norm wrt the reference
        """
        pdist = PairwiseDistance(p=1)
        distances = torch.zeros((len(self), self.logits.shape[1]))
        for b_idx, batch_softmax in enumerate(self.softmax[1:]):
            distances[b_idx + 1] = pdist(self.softmax[0], batch_softmax)
        return distances

    @property
    def std_difference(self) -> torch.Tensor:
        """
        Computes the standard deviation of the difference between the 0-th logits and (n+1)-logits
        Used to show the difference in logits between n-batches logits, ex:
            self.logits[0] is the reference
            self.logits[1:] are the logits we compute the std difference wrt the reference
        """
        std_diffs = torch.zeros((len(self), self.logits.shape[1]))
        for b_idx, batch_logits in enumerate(self.logits[1:]):
            std_diffs[b_idx + 1] = (self.logits[0] - batch_logits).std(dim=-1)
        return std_diffs

    ...
`.trim()

const WorkDetection = () => (
    <Work>
        <WorkHeader
            title="Adversarial Examples detection"
            intro="[In Progress] Research conducted for my MS. degree."
            thumbnailPath="/works/detection/thumbnail.png"
            tags={["Python", "PyTorch", "Jupyter Notebook", "Google Colab"]}
            links={
                [
                    { href: "https://github.com/", title: "GitHub" },
                    // { href: "https://github.com/", title: "arXiv" },
                ]
            }
        />
        <WorkBody>
            <WorkSectionTitle mt="0">Abstract</WorkSectionTitle>
            <Text>
                Similar to other machine learning algorithms, neural networks have been shown to be vulnerable to adversarial examples, <i>i.e.</i> inputs containing specifically crafted perturbations whose only objective is to fool a network into misclassification. On the other hand, neural networks are known to be much more robust to <i>random</i> perturbations in the input.
                This motivated us to propose an easy-to-deploy adversarial example detection method based on measuring prediction inconsistencies before and after applying random noise to an input image.
                We evaluate our method on subsets of three popular benchmarks (Dogs vs Cats, CIFAR-10, and ImageNet) and show that it achieves high adversarial example detection performance for various attacks on higher resolution images. The main advantages of our approach are its simplicity, low computational cost, and the fact that it does not require any prior knowledge of the attack used, which makes it easy to integrate our method into other defence frameworks.
            </Text>

            <WorkSectionTitle>What I did</WorkSectionTitle>
            <Text>
                During this research, I compared the difference of <i>robustness</i> between
                normal images and adversarial examples and showed that a difference exist.
            </Text>
            <Text>
                Secondly, I showed that this differences can be leveraged to detect the nature of an input image (e.g. normal or adversarial).
            </Text>

            <WorkSectionTitle>Some graphics from the paper</WorkSectionTitle>

            <Flex wrap="wrap" m="10px auto" justifyContent="center">
                <Popover id="1">
                    <PopoverTrigger>
                        <Image
                            w={{ base: "100%", md: "50%" }}
                            src="/works/detection/fig2a.jpg"
                            alt="Consistency a"
                            cursor="pointer"
                        />
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Consistency</PopoverHeader>
                        <PopoverBody>
                            This shows the consistency differences between
                            <UnorderedList>
                                <ListItem><i>normal</i> images</ListItem>
                                <ListItem><i>BIM</i> adversarial examples</ListItem>
                                <ListItem><i>CW</i> adversarial examples</ListItem>
                            </UnorderedList>
                            Here, attacks have an L2 norm average of 1.00.
                        </PopoverBody>
                    </PopoverContent>
                </Popover>

                <Popover id="2">
                    <PopoverTrigger>
                        <Image
                            w={{ base: "100%", md: "50%" }}
                            src="/works/detection/fig2b.jpg"
                            alt="Consistency b"
                            cursor="pointer"
                        />
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Consistency</PopoverHeader>
                        <PopoverBody>
                            This shows the consistency differences between
                            <UnorderedList>
                                <ListItem><i>normal</i> images</ListItem>
                                <ListItem><i>BIM</i> adversarial examples</ListItem>
                            </UnorderedList>
                            Here, BIM attacks uses a different L2.
                            We can see that the higher the L2 distance, the more robust the attack is to random perturbation.
                        </PopoverBody>
                    </PopoverContent>
                </Popover>

                <Popover id="3">
                    <PopoverTrigger>
                        <Image
                            w={{ base: "100%", md: "50%" }}
                            src="/works/detection/fig3a.jpg"
                            alt="Logits difference normal image"
                            cursor="pointer"
                        />
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Prediction differences</PopoverHeader>
                        <PopoverBody>
                            This shows the difference between a normal image's logits and a noisy version's logits of the same image.
                        </PopoverBody>
                    </PopoverContent>
                </Popover>

                <Popover id="4">
                    <PopoverTrigger>
                        <Image
                            w={{ base: "100%", md: "50%" }}
                            src="/works/detection/fig3b.jpg"
                            alt="Logits difference BIM adversarial example"
                            cursor="pointer"
                        />
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Consistency</PopoverHeader>
                        <PopoverBody>
                            This shows the difference between an adversarial examples's logits and a noisy version's logits of the same image.
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </Flex>
            <WorkSectionTitle>Presentation slides</WorkSectionTitle>
            <Flex wrap="wrap" m="10px auto" justifyContent="center">
                <Image
                    w="full"
                    src="/works/detection/mti1.png"
                    alt="Slide 1"
                />
                <Image
                    w="full"
                    src="/works/detection/mti2.png"
                    alt="Slide 2"
                />
                <Image
                    w="full"
                    src="/works/detection/mti3.png"
                    alt="Slide 3"
                />
                <Image
                    w="full"
                    src="/works/detection/mti4.png"
                    alt="Slide 4"
                />
                <Image
                    w="full"
                    src="/works/detection/mti5.svg"
                    alt="Slide 5"
                />
                <Image
                    w="full"
                    src="/works/detection/mti6.svg"
                    alt="Slide 6"
                />
                <Image
                    w="full"
                    src="/works/detection/mti7.png"
                    alt="Slide 7"
                />
                <Image
                    w="full"
                    src="/works/detection/mti8.svg"
                    alt="Slide 8"
                />
            </Flex>

            <WorkSectionTitle>Computing the metrics, code snippet</WorkSectionTitle>
            <Code code={metricsCode} language="python" />

        </WorkBody>
    </Work>
)

export default WorkDetection
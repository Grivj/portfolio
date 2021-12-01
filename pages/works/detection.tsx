import {
    Flex, Image, ListItem, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent,
    PopoverHeader, PopoverTrigger, Text, UnorderedList
} from "@chakra-ui/react"
import Work, { WorkBody, WorkHeader } from "../../components/App/Work"


const WorkDetection = () => (
    <Work>
        <WorkHeader
            title="Adversarial Examples detection"
            intro="Research conducted for my MS. degree."
            thumbnailPath="/works/detection/thumbnail.png"
            tags={["Python", "PyTorch"]}
            links={
                [
                    { href: "https://github.com/", title: "GitHub" },
                    // { href: "https://github.com/", title: "arXiv" },
                ]
            }
        />
        <WorkBody>
            <Text fontStyle="italic" fontSize="1.2em">Abstract</Text>
            <Text>
                Similar to other machine learning algorithms, neural networks have been shown to be vulnerable to adversarial examples, <i>i.e.</i> inputs containing specifically crafted perturbations whose only objective is to fool a network into misclassification. On the other hand, neural networks are known to be much more robust to <i>random</i> perturbations in the input.
                This motivated us to propose an easy-to-deploy adversarial example detection method based on measuring prediction inconsistencies before and after applying random noise to an input image.
                We evaluate our method on subsets of three popular benchmarks (Dogs vs Cats, CIFAR-10, and ImageNet) and show that it achieves high adversarial example detection performance for various attacks on higher resolution images. The main advantages of our approach are its simplicity, low computational cost, and the fact that it does not require any prior knowledge of the attack used, which makes it easy to integrate our method into other defence frameworks.
            </Text>

            <Text fontSize="1.2em" mt="40px" fontWeight="700">What I did</Text>
            <Text>
                During this research, I compared the difference of <i>robustness</i> between
                normal images and adversarial examples and showed that a difference exist.
            </Text>
            <Text>
                Secondly, I showed that this differences can be leveraged to detect the nature of an input image (e.g. normal or adversarial).
            </Text>

            <Text fontSize="1.2em" mt="40px" fontWeight="700">Some graphics from the paper</Text>

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
            <Text fontSize="1.2em" mt="40px" fontWeight="700">Presentation slides</Text>
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
        </WorkBody>
    </Work>
)

export default WorkDetection
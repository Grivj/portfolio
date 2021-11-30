import { Text } from "@chakra-ui/react"
import Work, { WorkBody, WorkHeader } from "../../components/App/Work"


const WorkTest = () => (
    <Work>
        <WorkHeader
            title="Adversarial examples detection"
            intro="Augue tempus, sagittis viverra egestas ornare semper massa quis. Pretium eu augue adipiscing volutpat et fames quisque et. Senectus varius ut imperdiet tristique ut blandit ipsum ut. Dictumst suspendisse egestas eu aliquet facilisi cum feugiat dictum scelerisque. Pellentesque aliquet ut est in sed morbi."
            thumbnailPath="/files_logos/file_type_next.svg"
            tags={["Python", "PyTorch"]}
            links={
                [
                    { href: "https://github.com/", title: "GitHub" },
                ]
            }
        />
        <WorkBody>
            <Text fontStyle="italic" fontSize="1.2em">Abstract</Text>
            <Text textAlign="justify">
                Similar to other machine learning algorithms, neural networks have been shown to be vulnerable to adversarial examples, <i>i.e.</i> inputs containing specifically crafted perturbations whose only objective is to fool a network into misclassification. On the other hand, neural networks are known to be much more robust to <i>random</i> perturbations in the input.
                This motivated us to propose an easy-to-deploy adversarial example detection method based on measuring prediction inconsistencies before and after applying random noise to an input image.
                We evaluate our method on subsets of three popular benchmarks (Dogs vs Cats, CIFAR-10, and ImageNet) and show that it achieves high adversarial example detection performance for various attacks on higher resolution images. The main advantages of our approach are its simplicity, low computational cost, and the fact that it does not require any prior knowledge of the attack used, which makes it easy to integrate our method into other defence frameworks.
            </Text>
        </WorkBody>
    </Work>
)

export default WorkTest
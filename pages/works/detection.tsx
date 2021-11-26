import WorksLayout from '../../components/App/Works'
import { Box, Flex, Image, Text, Link, Button } from "@chakra-ui/react"

const Work = () => {
    const title = "Adversarial examples detection"
    const iconPath = "/files_logos/file_type_css.svg"

    return (
        <WorksLayout>
            <Flex>
                <Image
                    h="128px"
                    w="128px"
                    objectFit="contain"
                    alt="Work image logo"
                    src={iconPath}
                />
                <Flex direction="column" justifyContent="space-evenly">
                    <Text as="h1"
                        fontSize="26px"
                        lineHeight="30px"
                        fontWeight="600"
                    >{title}</Text>
                    <Flex gridGap="2ch">
                        <Link>
                            <Button>
                                See on github
                            </Button>
                        </Link>
                        <Link>
                            <Button>
                                See on arXiv
                            </Button>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
            <Box>
                <Text as="h1"
                    fontSize="2em"
                    borderBottom="1px solid #ffffff2e"
                    m="2ch 0ch"
                >{title}</Text>

                <Text>
                    Similar to other machine learning algorithms, neural networks have been shown to be vulnerable to adversarial examples, <i>i.e.</i> inputs containing specifically crafted perturbations whose only objective is to fool a network into misclassification. On the other hand, neural networks are known to be much more robust to <i>random</i> perturbations in the input.
                    This motivated us to propose an easy-to-deploy adversarial example detection method based on measuring prediction inconsistencies before and after applying random noise to an input image.
                    We evaluate our method on subsets of three popular benchmarks (Dogs vs Cats, CIFAR-10, and ImageNet) and show that it achieves high adversarial example detection performance for various attacks on higher resolution images. The main advantages of our approach are its simplicity, low computational cost, and the fact that it does not require any prior knowledge of the attack used, which makes it easy to integrate our method into other defence frameworks.
                </Text>
            </Box>
        </WorksLayout >
    )
}

export default Work
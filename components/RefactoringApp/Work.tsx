import { Box, Button, Flex, HStack, Image, Link, Tag, Text } from "@chakra-ui/react"
import Pane, { PaneItem } from "./Pane"


const Work: React.FC = ({ children }) => {

    return (
        <WorkContainer>
            <WorkRightContainer>
                <Pane title="research" defaultIsOpen={true}>
                    <PaneItem
                        title="Adversarial examples"
                        intro="AE detection via input transformation"
                        thumbnailPath="/files_logos/file_type_image.svg"
                        href="/refactoringworks/worktest"
                    />
                    <PaneItem
                        title="Adversarial examples"
                        intro="AE detection via input transformation"
                        thumbnailPath="/files_logos/file_type_image.svg"
                        href="/works/detection"
                    />
                    <PaneItem
                        title="Adversarial examples"
                        intro="AE detection via input transformation"
                        thumbnailPath="/files_logos/file_type_image.svg"
                        href="/works/detection"
                    />
                </Pane>
                <Pane title="others">
                </Pane>
            </WorkRightContainer>
            <WorkLeftContainer>
                {children}
            </WorkLeftContainer>
        </WorkContainer>
    )
}


const WorkContainer: React.FC = ({ children }) => (
    <Flex>
        {children}
    </Flex>
)

const WorkRightContainer: React.FC = ({ children }) => (
    <Flex direction="column" bg="#252526" w="300px">
        {children}
    </Flex>
)


const WorkLeftContainer: React.FC = ({ children }) => (
    <Box flexGrow={1} p="10px">
        {children}
    </Box>
)

interface LinkProps {
    href: string
    title: string
}
interface HeaderProps {
    title: string
    intro: string
    thumbnailPath: string
    tags?: string[]
    links?: LinkProps[]
}

export const WorkHeader = ({ title, intro, thumbnailPath, tags, links }: HeaderProps) => (
    <Flex borderBottom="1px solid #888888" gridGap="10px" p="20px 0">
        <Image
            h="100px"
            w="100px"
            alt="Work thumbnail"
            src={thumbnailPath}
        />
        <Box>
            <Text as="h1">{title}</Text>
            <Text as="sub">{intro}</Text>
            {tags &&
                <HStack>
                    {tags.map((tag, index) => (
                        <Tag key={index}
                            fontSize="10px"
                            m="4px 0"
                            p="2px 4px"
                            borderRadius="2px"
                            color="#888888"
                            backgroundColor="transparent"
                            border="1px solid"
                            cursor="default"
                        >{tag}</Tag>
                    ))}
                </HStack>
            }
            {links &&
                <HStack>
                    {links.map((link, index) => (
                        <Link key={index} href={link.href} isExternal>
                            <Tag key={index}
                                fontSize="10px"
                                m="4px 0"
                                p="2px 4px"
                                borderRadius="2px"
                                border="1px solid"
                                bg="#007acc"
                            >View on {link.title}</Tag>
                        </Link>
                    ))}
                </HStack>
            }
        </Box>
    </Flex>
)


export default Work
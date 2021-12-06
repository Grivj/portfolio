import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Box, Container, Flex, HStack, Image, Link, Tag, Text } from "@chakra-ui/react"
import Pane, { PaneItem } from "./Pane"

const Work: React.FC = ({ children }) => {

    return (
        <WorkContainer>
            <WorkRightContainer>
                <Pane title="research" defaultIsOpen={true}>
                    <PaneItem
                        title="Adversarial examples"
                        intro="[In Progress] AE detection via input transformation"
                        thumbnailPath="/works/detection/thumbnail.png"
                        href="/works/detection"
                    />
                </Pane>
                <Pane title="Personal projects" defaultIsOpen={true}>
                    <PaneItem
                        title="Portfolio"
                        intro="My personal homepage"
                        thumbnailPath="/works/portfolio/thumbnail.png"
                        href="/works/portfolio"
                    />
                    <PaneItem
                        title="X-Ray Scans classification"
                        intro="Detecting Covid from X-Ray chest scans"
                        thumbnailPath="/works/xrays/thumbnail.png"
                        href="/works/xrays"
                    />
                    <PaneItem
                        title="Blackjack card counting trainer"
                        intro="[In Progress] Card counting trainer for Blackjack"
                        thumbnailPath="/works/blackjack/thumbnail.png"
                        href="/works/blackjack"
                    />
                </Pane>
                <Pane title="for fun" defaultIsOpen={true}>
                    <PaneItem
                        title="Codewars"
                        intro="Personal contributions on Codewars.com"
                        thumbnailPath="/works/codewars/thumbnail.png"
                        href="/works/codewars"
                    />
                </Pane>
            </WorkRightContainer>
            <WorkLeftContainer>
                {children}
            </WorkLeftContainer>
        </WorkContainer>
    )
}


const WorkContainer: React.FC = ({ children }) => (
    <Flex direction={{ base: "column", lg: "row" }} flex={1} height="full" overflow="auto">
        {children}
    </Flex>
)

const WorkRightContainer: React.FC = ({ children }) => (
    <Flex
        direction="column"
        bg="#252526"
        w={{ base: "100%", lg: "200px", xl: "300px" }}
        minWidth={{ base: "100%", lg: "200px", xl: "300px" }}
    >
        {children}
    </Flex>
)


const WorkLeftContainer: React.FC = ({ children }) => (
    <Container flexGrow={1} p="10px" overflow="auto" maxWidth={{ base: "100%", lg: "990px" }}>
        {children}
    </Container>
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
    <Flex
        direction={["column", "row"]}
        alignItems={["center", "left"]}
        borderBottom="1px solid #888888"
        gridGap="10px"
        p="20px 0"
        mb="20px"
    >
        <Image
            h="100px"
            w="100px"
            alt="Work thumbnail"
            src={thumbnailPath}
        />
        <Box>
            <Text as="h1" fontSize="1.6em">{title}</Text>
            <Text noOfLines={2}>{intro}</Text>
            {tags &&
                <HStack>
                    {tags.map((tag, index) => (
                        <Tag key={index}
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
                                p="4px 10px"
                                borderRadius="2px"
                                border="1px solid"
                                bg="#007acc"
                            ><ArrowForwardIcon mr="5px" />{link.title}</Tag>
                        </Link>
                    ))}
                </HStack>
            }
        </Box>
    </Flex>
)

export const WorkBody: React.FC = ({ children }) => (
    <Box p="10px">
        {children}
    </Box>
)

export const WorkSectionTitle = ({ mt = "40px", children }: { mt?: string, children: React.ReactNode }) => (
    <Text
        borderBottom="0.1rem solid #2d242c"
        fontSize="1.5em" mt={mt} fontWeight="700"
    >
        {children}
    </Text>
)

export default Work
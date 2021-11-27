import { Box, Button, Flex, Image, Link, Tag, Text } from "@chakra-ui/react"
import Works from "./Works"

interface LinkProps {
    href?: string
    title: string
}

interface Props {
    title: string
    longTitle?: string
    iconPath: string
    children: React.ReactNode
    tags?: Array<string>
    links?: Array<LinkProps>
}


const WorksLayout = ({ title, iconPath, longTitle, children, tags = [], links = [] }: Props) => (
    <Works>
        <Flex flexWrap={["wrap", "nowrap"]}>
            <Image
                h={["48px", "68px", "88px", "108px"]}
                w={["48px", "68px", "88px", "108px"]}
                objectFit="contain"
                alt="Work image logo"
                src={iconPath}
            />
            <Flex direction="column" justifyContent="space-evenly" gridGap="4px">
                <Text as="h1"
                    fontSize="26px"
                    lineHeight="30px"
                    fontWeight="600"
                >
                    Adversarial Examples Detection
                </Text>
                <Flex flexWrap="wrap" gridGap="4px">
                    {tags.map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                    ))}
                </Flex>
                <Flex flexWrap="wrap" gridGap="4px">
                    {links.map((link, index) => (
                        <Link key={index} href={link.href}>
                            <Button disabled={link.href ? false : true}>
                                See on {link.title}
                            </Button>
                        </Link>
                    ))}
                </Flex>
            </Flex>
        </Flex>
        <Box>
            <Text as="h1"
                fontSize="2em"
                borderBottom="1px solid #ffffff2e"
                m="2ch 0ch"
            >{longTitle ? longTitle : title}</Text>
            {children}
        </Box>
    </Works >

)

export default WorksLayout
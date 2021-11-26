import { Box, Collapse, Flex, Image, Text, useDisclosure } from "@chakra-ui/react"
import Nav from './Nav'

interface AppProps {
    bodyPadding?: string | Array<string>
}

const App: React.FC<AppProps> = ({ bodyPadding = ["2ch"], children }) => {
    const { isOpen, onToggle } = useDisclosure({ 'defaultIsOpen': true })

    return (
        <Box
            backgroundColor="#1E1E1E"
            borderRadius={{base:"0", xl:"10px"}}
            overflow="hidden"
            boxShadow="dark-lg"
            opacity="0.85"
        >
            <Flex
                flexDir={"column"}
                height="inherit"
            >
                <Flex direction="column">
                    <Flex alignItems="center" p="1ch 2ch" gridGap="20px" backgroundColor="#3C3C3C" justifyContent={"space-between"}>
                        <Box
                            w="16px" h="16px"
                            borderRadius="50%"
                            backgroundColor="#FFB83D"
                            cursor="pointer"
                            onClick={onToggle}
                        />
                        <Text as="h1" fontSize="1.2em">Griveau Jordan - portfolio</Text>
                        <Image alt="Profile picture" src="/profile.png" h="28px" />
                    </Flex>
                    <Nav />
                </Flex>
                <Collapse in={isOpen}>
                    <Box padding={bodyPadding}>
                        {children}
                    </Box>
                </Collapse>
            </Flex>
        </Box>
    )
}



export default App
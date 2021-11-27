import { Box, Collapse, Flex, Image, Text, useDisclosure } from "@chakra-ui/react"
import Footer from '../Footer'
import Nav from './Nav'

interface AppProps {
    bodyPadding?: string | Array<string>
}

const App: React.FC<AppProps> = ({ bodyPadding = ["2ch"], children }) => {
    const { isOpen, onToggle } = useDisclosure({ 'defaultIsOpen': true })

    return (
        <Flex
            as="main"
            alignItems="center"
            justifyContent="center"
            w="100vw"
            h="100vh"
            p={{ base: "0", sm: "0", lg: "3% 10%", xl: "5% 15%", '2xl': "5% 20%" }}
        >
            <Flex
                flexDir={"column"}
                borderRadius={{ base: "0", sm: "0", lg: "10px", xl: "10px", '2xl': "10px" }}
                width="full"
                h="full"
                overflow="hidden"
                boxShadow="dark-lg"
                opacity="0.9"
            >
                <Flex direction="column">
                    <Flex alignItems="center" p="1ch 2ch" gridGap="20px" backgroundColor="#3C3C3C" justifyContent={"space-between"}>
                        {/* <Box
                            w="16px" h="16px"
                            borderRadius="50%"
                            backgroundColor="#FFB83D"
                            cursor="pointer"
                            onClick={onToggle}
                        /> */}
                        <Text as="h1" fontSize="1.2em">Griveau Jordan - portfolio</Text>
                        <Image alt="Profile picture" src="/profile.png" h="28px" />
                    </Flex>
                    <Nav />
                </Flex>
                {/* <Collapse in={isOpen} style={{ flex: "1", overflow: "auto" }}> */}
                <Box padding={bodyPadding} backgroundColor="#1E1E1E" overflow="auto" flex="1" >
                    {children}
                </Box>
                {/* </Collapse> */}
                <Footer />
            </Flex>
        </Flex>
    )
}



export default App
import { Box, Collapse, Fade, Flex, useDisclosure } from "@chakra-ui/react"
import Nav from './Nav'

interface AppProps {
    bodyPadding?: string | Array<string>
}

const App: React.FC<AppProps> = ({ bodyPadding = ["2ch"], children }) => {
    const { isOpen, onToggle } = useDisclosure({ 'defaultIsOpen': true })

    return (
        <Box
            backgroundColor="#1E1E1E"
            borderRadius={["0", "10px"]}
            overflow="hidden"
            boxShadow="dark-lg"
            opacity="0.85"
        >
            <Flex
                flexDir={"column"}
                height="inherit"
            >
                <Flex alignItems="center">
                    <Box
                        minWidth="15px" minHeight="15px"
                        margin="0 20px"
                        borderRadius="50%"
                        backgroundColor="#FFB83D"
                        cursor="pointer"
                        onClick={onToggle}
                    />
                    <Nav />
                </Flex>
                <Collapse in={isOpen}>
                    <Fade in={true}>
                        <Box padding={bodyPadding}>
                            {children}
                        </Box>
                    </Fade>

                </Collapse>
            </Flex>
        </Box>
    )
}



export default App
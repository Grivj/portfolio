import { Box, Container, Flex, HStack, useDisclosure, Collapse } from "@chakra-ui/react"
import { useState } from "react"
import Footer from '../Footer'
import Navbar from './Navbar'


const Layout: React.FC = ({ children }) => {
    const [isMaximized, setIsMaximized] = useState(false)
    const { isOpen, onToggle } = useDisclosure({ 'defaultIsOpen': true })


    const handleMaximize = () => {
        setIsMaximized(isMaximized ? false : true)
    }

    return (
        <Container
            maxWidth={isMaximized ? "100%" : { base: "100%", xl: "1200px" }}
            p={isMaximized ? "0" : { base: "0", xl: "10ch 0" }}
            height={isOpen ? "100vh" : "auto"}
            transitionDuration="0.5s"
        >
            <Flex
                direction="column"
                bg="#1E1E1E"
                opacity="0.9"
                height="full"
                borderRadius={isMaximized ? "0" : { base: "0", xl: "10px" }}
                overflow="hidden"
                fontSize={{ base: "16px", lg: "18px", xl: "21px" }}
                boxShadow={isMaximized ? "" : "dark-lg"}
            >
                <HStack>
                    <HStack m="0 2ch" gridGap="8px">
                        <Box
                            w={{ base: "16px", lg: "18px", xl: "21px" }} h={{ base: "16px", lg: "18px", xl: "21px" }}
                            borderRadius="50%"
                            backgroundColor="#FFB83D"
                            cursor="pointer"
                            onClick={onToggle}
                            role="button"
                        />
                        <Box
                            w={{ base: "16px", lg: "18px", xl: "21px" }} h={{ base: "16px", lg: "18px", xl: "21px" }}
                            borderRadius="50%"
                            backgroundColor="#00C543"
                            cursor="pointer"
                            onClick={handleMaximize}
                            role="button"
                        />
                    </HStack>
                    <Navbar />
                </HStack>
                <Collapse in={isOpen} style={{ flex: "1", overflow: "auto" }}>
                    {children}
                </Collapse>
                <Footer />
            </Flex>
        </Container>
    )
}

export default Layout
import { Box, Collapse, Container, Flex, HStack } from "@chakra-ui/react"
import Footer from '../Footer'
import Navbar from './Navbar'

interface LayoutProps {
    isMaximized: boolean
    isOpen: boolean
    setIsMaximized: any
    onToggle: any
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ isMaximized, isOpen, setIsMaximized, onToggle, children }) => {

    const handleMaximize = () => {
        setIsMaximized(isMaximized ? false : true)
        if (!isOpen) {
            onToggle()
        }
    }

    return (
        <Container
            maxWidth={isMaximized ? "100%" : { base: "100%", lg: "990px" }}
            p={isMaximized ? "0" : { base: "0", lg: "10ch 0" }}
            height={isOpen ? "100vh" : "auto"}
            transitionDuration="0.5s"
        >
            <Flex
                direction="column"
                bg="#1E1E1E"
                opacity="0.95"
                height="full"
                borderRadius={isMaximized ? "0" : { base: "0", lg: "10px" }}
                overflow="hidden"
                fontSize={{ base: "16px" }}
                boxShadow={isMaximized ? "" : "dark-lg"}
            >
                <Flex bg="#252526">
                    <HStack m="0 2ch" gridGap="8px" display={{ base: "none", lg: "flex" }}>
                        <Box
                            w={{ base: "16px", lg: "18px" }} h={{ base: "16px", lg: "18px" }}
                            borderRadius="50%"
                            backgroundColor="#FFB83D"
                            cursor="pointer"
                            onClick={onToggle}
                            role="button"
                        />
                        <Box
                            w={{ base: "16px", lg: "18px" }} h={{ base: "16px", lg: "18px" }}
                            borderRadius="50%"
                            backgroundColor="#00C543"
                            cursor="pointer"
                            onClick={handleMaximize}
                            role="button"
                        />
                    </HStack>
                    <Navbar />
                </Flex>
                <Collapse in={isOpen} style={{ flex: "1", overflow: "auto" }}>
                    {children}
                </Collapse>
                <Footer />
            </Flex>
        </Container>
    )
}

export default Layout
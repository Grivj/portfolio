import { Box, Container, Flex, HStack } from "@chakra-ui/react"
import Footer from '../Footer'
import Navbar from './Navbar'

interface LayoutProps {
    isMaximized: boolean
    setIsMaximized: any
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ isMaximized, setIsMaximized, children }) => {

    const handleMaximize = () => {
        setIsMaximized(isMaximized ? false : true)
    }

    return (
        <Container
            maxWidth={isMaximized ? "100%" : { base: "100%", lg: "990px" }}
            p={isMaximized ? "0" : { base: "0", lg: "10ch 0" }}
            height="100%"
            transitionDuration="0.5s"
        >
            <Flex
                direction="column"
                bg="#1E1E1E"
                borderRadius={isMaximized ? "0" : { base: "0", lg: "18px" }}
                overflow="hidden"
                fontSize={{ base: "16px" }}
                boxShadow={isMaximized ? "" : "0px 20px 80px 0px rgb(0 0 0 / 60%)"}
                height={{ base: "auto", lg: "100%" }}
                minHeight={{ base: "100%", lg: "auto" }}
            >
                <Flex bg="#252526">
                    <HStack m="0 2ch" gridGap="8px" display={{ base: "none", lg: "flex" }}>

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
                {children}
                <Footer />
            </Flex>
        </Container>
    )
}

export default Layout
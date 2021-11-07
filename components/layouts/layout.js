import { Box, Container } from '@chakra-ui/react'
import Meta from '../Meta'
import NavBar from '../Nav'

const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <NavBar />

            <Box as="main" pb={8}>
                <Container maxW="container.md" pt={14}>
                    {children}
                </Container>
            </Box>
        </>
    )
}

export default Layout
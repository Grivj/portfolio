import { Box, Container } from '@chakra-ui/react'
import Meta from '../Meta'

const Layout = ({ children }) => {
    return (
        <>
            <Meta />

            <Box as="main" pb={8}>
                <Container maxWidth="100%">
                    {children}
                </Container>
            </Box>
        </>
    )
}

export default Layout
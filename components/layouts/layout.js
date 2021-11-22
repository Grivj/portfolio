import { Container } from '@chakra-ui/react'
import Meta from '../Meta'

const Layout = ({ children, router }) => {
    return (
        <>
            <Meta />

            <Container as="main" p="8" minHeight="100vh" maxWidth="100vh">
                {children}
            </Container>
        </>
    )
}

export default Layout
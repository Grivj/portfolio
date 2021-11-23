import { Container } from '@chakra-ui/react'
import Footer from '../Footer'
import Meta from '../Meta'
import NavBar from '../Nav'

const Layout = ({ children, router }) => {
    return (
        <>
            <Meta />
            <Container as="main" p={0} minHeight="100vh" maxWidth="full">
                {/* <NavBar router={router} /> */}
                {children}
                <Footer />
            </Container>
        </>
    )
}

export default Layout
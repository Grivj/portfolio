import { Container } from '@chakra-ui/react'
import Footer from '../Footer'
import Meta from '../Meta'
import Nav from '../Nav'

const Layout = ({ children, router }) => {
    return (
        <>
            <Meta />
            <Container as="main" p={["0", "0 10ch"]} minHeight="100vh" maxWidth="130ch">
                <Nav />
                {children}
                <Footer />
            </Container>
        </>
    )
}

export default Layout
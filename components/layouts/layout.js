import { Container } from '@chakra-ui/react'
import Footer from '../Footer'
import Meta from '../Meta'

const Layout = ({ children, router }) => {
    return (
        <>
            <Meta />

            <Container as="main" p={["1ch", "10ch"]} minHeight="100vh" maxWidth="130ch">
                {children}
                <Footer />
            </Container>
        </>
    )
}

export default Layout
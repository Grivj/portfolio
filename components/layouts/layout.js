import { Container } from '@chakra-ui/react'
import Meta from '../Meta'

const Layout = ({ children, router }) => {
    return (
        <>
            <Meta />

            <Container as="main" p={["1ch", "10ch"]} minHeight="100vh" maxWidth="130ch">
                {children}
            </Container>
        </>
    )
}

export default Layout
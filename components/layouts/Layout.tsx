import { Container, Box } from '@chakra-ui/react'
import Footer from '../Footer'
import Meta from '../Meta'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Meta />
            <Container as="main" p={0} minHeight="100vh">
                {children}
                <Footer />
            </Container>
        </>
    )
}

export default Layout
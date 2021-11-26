import { Container } from '@chakra-ui/react'
import Footer from '../Footer'
import Meta from '../Meta'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Meta />
            <Container as="main" padding={{base:"0", xl:"4ch 0"}} minHeight="100vh" maxWidth={{base:"100em", xl:"78em"}}>
                {children}
                <Footer />
            </Container>
        </>
    )
}

export default Layout
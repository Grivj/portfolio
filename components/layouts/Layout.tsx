import { Flex } from '@chakra-ui/react'
import Meta from '../Meta'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Meta />

            {children}
        </>
    )
}

export default Layout
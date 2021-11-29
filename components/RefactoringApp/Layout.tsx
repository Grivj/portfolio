import { Box } from "@chakra-ui/react"
import Footer from '../Footer'
import Navbar from './Navbar'

const Layout: React.FC = ({ children }) => {

    return (
        <Box bg="#1E1E1E" opacity="0.9">
            <Navbar />
            <Box>
                {children}
            </Box>
            <Footer />
        </Box>
    )
}

export default Layout
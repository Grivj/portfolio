import { Box } from "@chakra-ui/react"
import Footer from '../Footer'
import Navbar from './Navbar'
import Work from './Work'

const WorkLayout: React.FC = ({ children }) => {

    return (
        <Box bg="#1E1E1E" opacity="0.9">
            <Navbar />
            <Work>
                {children}
            </Work>
            <Footer />
        </Box>
    )
}

export default WorkLayout
import { Box } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box as="footer" align="center" backgroundColor="#007acc" fontSize="12px" p="2px">
            &copy; {new Date().getFullYear()} Griveau Jordan. All Rights Reserved.
        </Box>
    )
}

export default Footer
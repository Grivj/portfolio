import { Box } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box as="footer" align="center" opacity={0.4} fontSize="sm" p={"2ch"}>
            &copy; {new Date().getFullYear()} Griveau Jordan. All Rights Reserved.
        </Box>
    )
}

export default Footer
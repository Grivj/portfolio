import { Box, Flex } from "@chakra-ui/react"
import AppBar from "./AppBar"
import AppBody from "./AppBody"

interface Props {

}


const AppScreen = (props: Props) => {


    return (
        <Box backgroundColor="#1E1E1E" borderRadius="10px" h="80vh" overflow="hidden">
            <Flex flexDir={"column"}>
                <AppBar />
                <AppBody />
            </Flex>
        </Box>
    )
}



export default AppScreen
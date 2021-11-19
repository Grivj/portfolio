import { Flex } from "@chakra-ui/react"
import AppBarItem, { AppBarItemProps } from "./AppBarItem"
interface Props {
    tabs: AppBarItemProps[]
}


const AppBar = (props: Props) => {

    return (
        <Flex>
            {props.tabs.map((tabProps, index) => (
                <AppBarItem key={index} {...tabProps} />
            ))}

        </Flex>
    )
}



export default AppBar
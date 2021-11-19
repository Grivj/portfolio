import { Flex, Box } from "@chakra-ui/react"
import Code from "./AppCode"
interface Props {
    tabIndex: number,
}

const TabContentSkills = () => (
    <Flex flexDir="column">
        <Code line={1} indent={0} code="line of code" type="python"/>
        <Code line={2} indent={1} code="line of code" type="python"/>
        <Code line={3} indent={1} code="line of code" type="python"/>
        <Code line={4} indent={1} code="line of code" type="python"/>
        <Code line={5} indent={1} code="line of code" type="python"/>
        <Code line={6} indent={0} code="line of code" type="python"/>
    </Flex>
)


const AppBody = (props: Props) => {


    const contentSwitch = (contentId: number): JSX.Element => {
        switch (contentId) {
            case 0:
                return <TabContentSkills />

            default:
                return <>Content not found</>;
        }
    }

    return (
        <Box p="5">
            {contentSwitch(props.tabIndex)}
        </Box>
    )
}



export default AppBody
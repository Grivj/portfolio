import { Flex, Box } from "@chakra-ui/react"
import Code from "./AppCode"
interface Props {
    tabIndex: number,
}

const TabContentSkills = () => (
    <Flex flexDir="column">
        <Code line={1} indent={0} code="deep_learning = {" type="python"/>
        <Code line={2} indent={1} code='"Python": "~ 2 years",' type="python"/>
        <Code line={3} indent={1} code='"Pytorch": "~ 2 years",' type="python"/>
        <Code line={4} indent={0} code="}" type="python"/>
        <Code line={5} indent={0} code="" type="python"/>
        <Code line={6} indent={0} code="web_development = {" type="python"/>
        <Code line={7} indent={1} code='"React": "< 1 year"' type="python"/>
        <Code line={8} indent={1} code='"Next.js": "< 1 year"' type="python"/>
        <Code line={9} indent={1} code='"PHP": "~ 5 year"' type="python"/>
        <Code line={10} indent={1} code='"HTML": "~ 5 year"' type="python"/>
        <Code line={11} indent={1} code='"CSS": "~ 5 year"' type="python"/>
        <Code line={12} indent={0} code="}" type="python"/>
        <Code line={13} indent={0} code="" type="python"/>
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
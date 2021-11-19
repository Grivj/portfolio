import { Flex } from "@chakra-ui/react"

interface Props {
    tabIndex: number,
}

const TabContentSkills = () => (
    <h1>Skills tab</h1>
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
        <Flex>
            {contentSwitch(props.tabIndex)}
        </Flex>
    )
}



export default AppBody
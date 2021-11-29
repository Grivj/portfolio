import { Flex, Box } from "@chakra-ui/react"


const Work = () => {


    return (
        <WorkContainer>
            <WorkRightPanel>

            </WorkRightPanel>
            <WorkLeftBody>

            </WorkLeftBody>
        </WorkContainer>
    )
}


const WorkContainer: React.FC = ({ children }) => (
    <Flex direction="column">
        {children}
    </Flex>
)

const WorkRightPanel: React.FC = ({ children }) => (
    <Flex bg="#252526">
        {children}
    </Flex>
)

const PanelPaneHeader: React.FC = ({ children }) => (

)

const WorkLeftBody: React.FC = ({ children }) => (
    <Box>
        Body
        {children}
    </Box>
)

export default Work
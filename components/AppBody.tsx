import { Box, Container } from "@chakra-ui/react";
import { TCEducation, TCExperience, TCInterests, TCSkills } from "./tabContent/content";


const AppBody = ({ tabIndex }: { tabIndex: number }) => {

    const contentSwitch = (contentId: number): JSX.Element => {
        switch (contentId) {
            case 0:
                return <TCSkills />
            case 1:
                return <TCInterests />
            case 2:
                return <TCEducation />
            case 3:
                return <TCExperience />

            default:
                return <>Content not found</>;
        }
    }

    return (
        <Box padding="1ch" cursor="text">
            {contentSwitch(tabIndex)}
        </Box>
    )
}



export default AppBody
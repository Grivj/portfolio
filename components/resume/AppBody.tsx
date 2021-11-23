import { Box, Spinner } from "@chakra-ui/react";
import { TCEducation, TCExperience, TCInterests, TCSkills, TCWorks } from "./tabContent/content";


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
            case 4:
                return <TCWorks />

            default:
                return <>Content not found</>;
        }
    }

    return (
        <Box
            padding="1ch"
            cursor="text"
        >
            {tabIndex > -1
                ? contentSwitch(tabIndex)
                : <Box textAlign="center" p={"10ch"}>
                    <Spinner
                        thickness="4px"
                        speed="0.65s"
                        color="blue.500"
                        size="xl"
                    />
                </Box>
            }
        </Box>
    )
}



export default AppBody
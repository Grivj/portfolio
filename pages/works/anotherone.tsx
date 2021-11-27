import { Text } from "@chakra-ui/react"
import WorksLayout from '../../components/App/WorksLayout'

const Work = () => {

    return (
        <WorksLayout
            title="Another work"
            iconPath="/files_logos/file_type_json.svg"
            tags={["JavaScript", "TypeScript", "React.js"]}
            links={[{ href: "https://github.com/", title: "github" }]}
        >
            <Text>
                Another work
            </Text>
        </WorksLayout >
    )
}

export default Work
import { Box, Flex } from "@chakra-ui/react"
import { useRouter } from "next/router"
import React from "react"
import App from './App'
import { WorkPane, WorkPaneBody } from './WorksPane'

export const WorksPaneItems = [
    {
        'title': "research",
        'items': [
            {
                'title': "Adversarial examples detection",
                'iconPath': "/files_logos/file_type_css.svg",
                'description': "detecting adversarial examples via random perturbations",
                'href': "/works/detection"
            },
            {
                'title': "Another research",
                'iconPath': "/files_logos/file_type_json.svg",
                'description': "Researching lot of good stuff",
                'href': "/works/anotherone"
            }
        ]
    },
    {
        'title': "Personal projects",
        'items': [
            {
                'title': "Adversarial examples detection",
                'iconPath': "/files_logos/file_type_markdown.svg",
                'description': "detecting adversarial examples via random perturbations",
                'href': "/works/detection"
            },
            {
                'title': "Another research",
                'iconPath': "/files_logos/file_type_html.svg",
                'description': "Researching lot of good stuff",
                'href': "/works/anotherone"
            }
        ]
    }
]


const Works: React.FC = ({ children }) => {
    // const [contentPage, setContentPage] = useState("")
    const router = useRouter()


    return (
        <App bodyPadding={"0"}>
            <Flex direction={{base:'column', sm:'row'}} height="inherit">
                <Flex direction="column" backgroundColor="#252526">
                    {WorksPaneItems.map((pane, paneIndex) => (
                        <WorkPane key={paneIndex} defaultIsOpen={true} title={pane.title}>
                            {pane.items.map((item, itemIndex) => (
                                <WorkPaneBody
                                    key={itemIndex}
                                    title={item.title}
                                    iconPath={item.iconPath}
                                    description={item.description}
                                    href={item.href}
                                />
                            ))}
                        </WorkPane>
                    ))}
                </Flex>
                <Box w="full" p="2ch">
                    {children}
                </Box>
            </Flex>
        </App>
    )
}

export default Works
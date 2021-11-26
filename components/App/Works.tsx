import { Box, Flex } from "@chakra-ui/react"
import React, { useState } from "react"
import App from './App'
import { WorkPane, WorkPaneBody } from './WorksPane'
import Detection from './works/detection'
import { NextRouter, useRouter } from "next/router"

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
    }
]


const Works: React.FC = ({ children }) => {
    // const [contentPage, setContentPage] = useState("")
    const router = useRouter()


    return (
        <App bodyPadding={"0"}>
            <Flex>
                <Flex direction="column">
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
                    {/* <WorkPane defaultIsOpen={true} title="research">
                        <Box >
                            <WorkPaneBody
                                title="Adversarial examples detection"
                                iconPath="files_logos/file_type_css.svg"
                                description="detecting adversarial examples via random perturbations"
                                href="/works?work=detection"
                            />
                        </Box>
                    </WorkPane>
                    <WorkPane title="personal projects">
                    </WorkPane>
                    <WorkPane title="something else">
                    </WorkPane> */}
                </Flex>
                <Box w="full">
                    {children}
                </Box>
            </Flex>
        </App>
    )
}

export default Works
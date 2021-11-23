import { Box, Collapse, Flex, ScaleFade, useDisclosure } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import Router from 'next/router'
import { useEffect } from "react"
import AppBar from "./AppBar"
import { AppBarItemProps } from "./AppBarItem"
import AppBody from "./AppBody"


const AppScreen = () => {
    const { isOpen, onToggle } = useDisclosure({ 'defaultIsOpen': true })
    const router = useRouter();


    const isCurrentTab = (name: string): boolean => {
        return router.query.tab == name
    }

    const tabs: AppBarItemProps[] = [
        { name: "skills", extension: ".py", file_type: "python", toggled: isCurrentTab("skills") },
        { name: "interests", extension: ".json", file_type: "tsconfig", toggled: isCurrentTab("interests") },
        { name: "education", extension: ".md", file_type: "markdown", toggled: isCurrentTab("education") },
        { name: "experience", extension: ".md", file_type: "markdown", toggled: isCurrentTab("experience") },
        { name: "works", extension: "", file_type: "file", toggled: isCurrentTab("works") },
    ]

    useEffect(() => {
        if (router.isReady && Object.keys(router.query).length === 0) {
            Router.push('?tab=skills')
        }
    }, [router])


    return (
        <ScaleFade in={true}>
            <Box
                backgroundColor="#1E1E1E"
                borderRadius={["0", "10px"]}
                overflow="hidden"
                boxShadow="dark-lg"
                opacity="0.85"
            >
                <Flex flexDir={"column"} height="inherit">
                    <Flex alignItems="center">
                        <Box
                            minWidth="15px" minHeight="15px"
                            margin="0 20px"
                            borderRadius="50%"
                            backgroundColor="#FFB83D"
                            cursor="pointer"
                            onClick={onToggle}
                        />
                        <AppBar tabs={tabs} />
                    </Flex>
                    <Collapse in={isOpen}>
                        <AppBody tabIndex={tabs.findIndex(tab => tab.toggled)} />
                    </Collapse>
                </Flex>
            </Box>
        </ScaleFade>
    )
}



export default AppScreen
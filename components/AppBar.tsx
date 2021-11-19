import { Flex } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react"
import AppBarItem, { AppBarItemProps } from "./AppBarItem"

interface Props {

}


const AppBar = (props: Props) => {
    const { query } = useRouter();

    const isCurrentTab = (name: string): boolean => {
        return query.tab == name
    }

    const tabs: AppBarItemProps[] = [
        { name: "skills", extension: ".py", file_type: "python", toggled: isCurrentTab("skills") },
        { name: "interests", extension: ".json", file_type: "tsconfig", toggled: isCurrentTab("interests") },
        { name: "education", extension: ".md", file_type: "markdown", toggled: isCurrentTab("education") },
        { name: "experience", extension: ".md", file_type: "markdown", toggled: isCurrentTab("experience") },
    ]


    return (
        <Flex>
            {tabs.map((props, index) => (
                <AppBarItem key={index} {...props} />
            ))}

        </Flex>
    )
}



export default AppBar
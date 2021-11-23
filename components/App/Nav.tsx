import { Box, Button, Flex, Image } from "@chakra-ui/react"
import NextLink from "next/link"
import { useRouter } from "next/router"

const AppNav = () => {

    return (
        <Flex direction={{ base: "column", md: "row" }} alignItems="stretch" w="full" flexWrap="wrap">
            {TABS.map((props, index) => (
                <AppNavItem key={index} {...props} />
            ))}

        </Flex>
    )
}

const AppNavItem = (props: TABSProps) => {
    const router = useRouter()
    const isActive = props.href === router.asPath
    return (
        <NextLink href={props.href} passHref>
            <Button
                padding="0"
                borderRadius="0"
                background={isActive ? "#1E1E1E" : "#2D2D2D"}
                _focus={{ boxShadow: "none" }}
            >
                <Flex h="inherit" alignContent="center" alignItems="center" flexWrap="wrap" padding="12px 16px">
                    {props.file_type &&
                        <Box marginRight={"5px"}>
                            <Image alt="" src={`files_logos/file_type_${props.file_type}.svg`} w="20px" h="20px" />
                        </Box>
                    }
                    <Box as="span" fontFamily="Inter" fontWeight="400">
                        {props.name}{props.extension}
                    </Box>
                </Flex>
            </Button >
        </NextLink>
    )
}


interface TABSProps {
    name: string
    extension?: string
    file_type?: string
    href: string
}

const TABS: TABSProps[] = [
    { name: "skills", extension: ".py", file_type: "python", href: "/skills" },
    { name: "interests", extension: ".json", file_type: "tsconfig", href: "/interests" },
    { name: "education", extension: ".md", file_type: "markdown", href: "/education" },
    { name: "experience", extension: ".md", file_type: "markdown", href: "/experience" },
    { name: "works", extension: "", file_type: "file", href: "/works" },
]

export default AppNav
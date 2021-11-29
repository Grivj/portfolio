import { Flex, Box, HStack, Image, Text, Button, background } from "@chakra-ui/react"
import NextLink from "next/link"
import { useRouter } from "next/router"


const Navbar = () => (
    <NavbarContainer>
        <NavbarItem title="Link.css" href="/refactoringworks" fileType="css" />
        <NavbarItem title="Contact.yml" href="/contact" fileType="yaml" />
    </NavbarContainer>
)


const NavbarContainer: React.FC = ({ children }) => (
    <Flex bg="#252526">
        {children}
    </Flex>
)

interface ItemProps {
    title: string
    href: string
    fileType: string
}

const NavbarItem = ({ title, href, fileType }: ItemProps) => {
    const router = useRouter()
    const isActive = href.split('/')[1] === router.pathname.split('/')[1]
    const backgroundColor = isActive ? "#1E1E1E" : ""
    const iconPath = fileType ? `/files_logos/file_type_${fileType}.svg` : "/files_logos/file_type_file.svg"

    return (
        <NextLink href={href} passHref>
            <HStack
                role="button"
                background={backgroundColor}
                _hover={{ background: "#ffffff29" }}
                transitionDuration={"0.2s"}
                p="10px 20px"
            >
                <Image
                    h="24px"
                    w="24px"
                    alt={`Nav item icon - ${fileType}`}
                    src={iconPath}
                />
                <Text>
                    {title}
                </Text>
            </HStack>
        </NextLink>
    )
}

export default Navbar
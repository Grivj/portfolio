import { Flex, HStack, Text } from "@chakra-ui/react"
import Image from "next/image"
import NextLink from "next/link"
import { useRouter } from "next/router"
import IconMD from "../../public/files_logos/file_type_markdown.svg"
import IconWorks from "../../public/files_logos/file_type_project.png"
import IconYML from "../../public/files_logos/file_type_yaml.svg"



const Navbar = () => (
    <NavbarContainer>
        <NavbarItem title="README.md" href="/readme" icon={IconMD} />
        <NavbarItem title="bio.md" href="/bio" icon={IconMD} />
        <NavbarItem title="socials.yml" href="/socials" icon={IconYML} />
        <NavbarItem title="works" href="/works/detection" icon={IconWorks} />
    </NavbarContainer>
)


const NavbarContainer: React.FC = ({ children }) => (
    <Flex direction={{ base: "column", sm: "row" }} flex={1}>
        {children}
    </Flex>
)

interface ItemProps {
    title: string
    href: string
    icon: StaticImageData
}

const NavbarItem = ({ title, href, icon }: ItemProps) => {
    const router = useRouter()
    const isActive = href.split('/')[1] === router.pathname.split('/')[1]
    const backgroundColor = isActive ? "#1E1E1E" : ""

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
                    src={icon}
                    height="24px"
                    width="24px"
                    alt="Nav item icon"
                />
                <Text color={isActive ? '#00C543' : ''}>
                    {title}
                </Text>
            </HStack>
        </NextLink>
    )
}

export default Navbar
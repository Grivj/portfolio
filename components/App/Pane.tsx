import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { Box, Collapse, Flex, HStack, Image, Text, useDisclosure } from "@chakra-ui/react"
import React, { Children } from "react"
import NextLink from "next/link"
import { useRouter } from "next/router"



interface PaneProps {
    title: string
    defaultIsOpen?: boolean
}

const Pane: React.FC<PaneProps> = ({ title, defaultIsOpen, children }) => {
    const { isOpen, onToggle } = useDisclosure({ 'defaultIsOpen': defaultIsOpen })

    return (
        <Box className="chakra-dont-set-collapse">
            <HStack onClick={onToggle}
                p="5px 10px"
                fontSize="11px"
                fontWeight="700"
                textTransform="uppercase"
                overflow="hidden"
                display="flex"
                cursor="pointer"
                alignItems="center"
                justifyContent="space-between"
            >
                {isOpen
                    ? <ChevronDownIcon fontSize="1.5em" />
                    : <ChevronRightIcon fontSize="1.5em" />
                }
                <Box flexGrow={1}>{title}</Box>
                <Box
                    padding="3px 6px"
                    borderRadius="11px"
                    fontWeight="400"
                    minWidth="18px"
                    minHeight="18px"
                    lineHeight="11px"
                    backgroundColor="#4d4d4d"
                    color="white"
                >
                    {Children.count(children)}
                </Box>
            </HStack>
            <Collapse in={isOpen}>
                <Flex direction="column">
                    {children}
                </Flex>
            </Collapse>

        </Box>
    )
}

interface ItemProps {
    title: string
    intro: string
    thumbnailPath: string
    href: string
}

export const PaneItem = ({ title, intro, thumbnailPath, href }: ItemProps) => {
    const router = useRouter()
    const isActive = href === router.asPath
    const backgroundColor = isActive ? "#37373D" : ""

    return (
        <NextLink href={href} passHref>
            <HStack
                bg={backgroundColor}
                _hover={{ background: '#2a2d2e' }}
                cursor="pointer"
                p="5px"
            >
                <Image
                    h="42px"
                    w="42px"
                    alt="Pane thumbnail"
                    objectFit="cover"
                    src={thumbnailPath}
                />
                <Box isTruncated>
                    <Text fontWeight="bold" isTruncated>{title}</Text>
                    <Text isTruncated fontSize="0.8em">{intro}</Text>
                </Box>
            </HStack>
        </NextLink>
    )
}



export default Pane

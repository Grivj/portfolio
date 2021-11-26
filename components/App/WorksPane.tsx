import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { Box, Collapse, Flex, Image, Text, useDisclosure } from "@chakra-ui/react"
import NextLink from "next/link"
import React, { Children } from "react"
import { useRouter } from "next/router"



interface WorkPaneProps {
    defaultIsOpen?: boolean
    children: React.ReactNode
    title: string

}

export const WorkPane = ({ defaultIsOpen = false, title, children }: WorkPaneProps) => {
    const { isOpen, onToggle } = useDisclosure({ 'defaultIsOpen': defaultIsOpen })

    return (
        <Box w="300px">
            <Box role="button"
                p="1ch"
                fontSize="11px"
                fontWeight="700"
                textTransform="uppercase"
                overflow="hidden"
                display="flex"
                cursor="pointer"
                alignItems="center"
                justifyContent="space-between"
                onClick={onToggle}
            >
                <Flex>
                    {isOpen
                        ? <ChevronDownIcon fontSize="16px" />
                        : <ChevronRightIcon fontSize="16px" />
                    }
                    <h3>{title}</h3>
                </Flex>
                <Box
                    padding="3px 6px"
                    mr="12px"
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
            </Box>
            <Collapse in={isOpen}>
                <Flex direction="column">
                    {children}
                </Flex>
            </Collapse>
        </Box>
    )
}
interface WorkPaneBodyProps {
    title: string
    iconPath: string
    description: string
    href: string
}

export const WorkPaneBody = ({ title, iconPath, description, href }: WorkPaneBodyProps) => {
    const router = useRouter()
    const isActive = href === router.asPath

    return (
        <NextLink href={href} passHref>
            <Flex
                alignItems="center"
                w="full"
                boxSizing="border-box"
                p="0.5ch"
                gridGap={"5px"}
                cursor="pointer"
                // _hover={{ background: '#2a2d2e' }}
                // _active={{ background: '#37373d' }}
                background={isActive ? "#37373d" : ""}
            >
                <Image
                    h="42px"
                    w="42px"
                    objectFit="contain"
                    alt={title}
                    src={iconPath}
                />
                <Box minWidth="0" whiteSpace="nowrap">
                    <Text textOverflow="ellipsis" overflow="hidden" fontWeight="700">{title}</Text>
                    <Text textOverflow="ellipsis" overflow="hidden">{description}</Text>
                </Box>
            </Flex>
        </NextLink>
    )
}
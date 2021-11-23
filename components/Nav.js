import { Box, Collapse, Container, Flex, Link, Stack, Text, useDisclosure } from "@chakra-ui/react";
import NextLink from 'next/link';
import React from "react";
import Logo from "./Logo";

const NavBar = ({ router }) => {
    const { isOpen, onToggle } = useDisclosure({ 'defaultIsOpen': true })

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Container as="nav" mb="2ch" maxWidth={"150ch"}>
            <NavBarContainer>
                <Logo color="white" />

                <MenuToggle toggle={onToggle} isOpen={isOpen} />
                <Box display={{ base: "none", md: "block" }}>
                    <MenuLinks router={router} />
                </Box>
            </NavBarContainer>


            <Collapse in={isOpen}>
                <Box display={{ base: "block", md: "none" }} w="full">
                    <MenuLinks router={router} />
                </Box>

            </Collapse>
        </Container>
    );
};
export default NavBar;

const CloseIcon = () => (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path
            fill="white"
            d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
        />
    </svg>
);

const MenuIcon = () => (
    <svg
        width="24px"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
    >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
    return (
        <Box onClick={toggle} display={{ base: "block", md: "none" }}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
        </Box>
    );
};

const MenuItem = ({ children, href = "/", router }) => {
    const active = href === router.route
    return (
        <NextLink href={href} passHref>
            <Link
                backgroundColor={active ? 'rgb(30 30 30 / 85%)' : undefined}
                p="1ch"
                borderRadius="10px"
                _focus={{ boxShadow: "none" }}
            >
                <Text display="block">
                    {children}
                </Text>
            </Link>
        </NextLink>
    );
};

const MenuLinks = ({ router }) => {
    return (
        <Stack
            spacing={8}
            align="center"
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
        >
            <MenuItem href="/" router={router}>Home</MenuItem>
            <MenuItem href="/resume" router={router}>Résumé</MenuItem>
        </Stack>
    );
};

const NavBarContainer = ({ children }) => {
    return (
        <Flex
            align="center"
            justify="space-between"
            wrap="wrap"
            color={"white"}
            p="2ch"
        >
            {children}
        </Flex>
    );
};


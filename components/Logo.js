import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function Logo(props) {
    return (
        <Box {...props}>
            <Text fontSize="2xl" fontWeight="bold" fontFamily="Segoe UI">
                Griveau Jordan
            </Text>
        </Box>
    );
}
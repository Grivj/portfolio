import { Box, Flex } from "@chakra-ui/react"
import Prism from "prismjs"
import "prismjs/components/prism-json"
import "prismjs/components/prism-markdown"
import "prismjs/components/prism-python"
import React, { Children, useEffect, useState } from "react"


type CodeProps = {
    children: React.ReactNode[]
}

export const Code = ({ children }: CodeProps) => {
    const arrayChildren = Children.toArray(children)

    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <Box
            as="div"
            className="Code"
            background="none"
            overflow="auto"
            sx={{
                '&::-webkit-scrollbar': {
                    borderRadius: '10px',
                    backgroundColor: `#2D2D2D       `,
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: `#424242`,
                },
            }}
        >
            <Flex as="pre" direction="column">
                {Children.map(arrayChildren, (child, index) => (
                    <React.Fragment key={index}>
                        <Flex w="full">
                            <CodeIndex index={index + 1} />
                            {child}
                        </Flex>
                    </React.Fragment>
                ))}
            </Flex>
        </Box>
    );
}

type CodeLineProps = {
    code?: string
    language?: string,
    indent?: number,
    fontWeight?: string,
    fontStyle?: string,
    style?: object,
}

export const CodeLine = ({ code, language = "python", indent = 0, fontWeight = "normal", fontStyle = "normal", style = {} }: CodeLineProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false)
    return (
        <Box
            as="code"
            style={{ textIndent: indent * 25, ...style }}
            className={`language-${language}`}
            fontWeight={fontWeight}
            fontStyle={fontStyle}
            w="inherit"
            _hover={{ backgroundColor: "#1C2E3E" }}
        >
            {code}
        </Box>
    )
}


const CodeIndex = ({ index }: { index: number }) => (
    <Box
        as="span"
        mr="40px"
        // w="20px"
        display="inline-block"
        textAlign="right"
        color="#858585"
        fontFamily="Cascadia Code"
    >
        {index < 10 ? `0${index}` : index}
    </Box>
)
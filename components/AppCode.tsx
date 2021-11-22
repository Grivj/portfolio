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
        console.log(Prism)
    }, []);
    return (
        <Box as="div" className="Code" background="none">
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
    fontStyle?: string
}

export const CodeLine = ({ code, language = "python", indent = 0, fontWeight = "normal", fontStyle = "normal" }: CodeLineProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false)
    return (
        <Box
            as="code"
            style={{ textIndent: indent * 45 }}
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
        w="20px"
        display="inline-block"
        textAlign="right"
        color="#858585"
        fontFamily="Cascadia Code"
    >
        {index}
    </Box>
)
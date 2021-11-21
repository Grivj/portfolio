import { Box, Flex } from "@chakra-ui/react"
import Prism from "prismjs"
import "prismjs/components/prism-json"
import "prismjs/components/prism-markdown"
import "prismjs/components/prism-python"
import React, { Children, useEffect } from "react"
// import "prismjs/themes/prism-okaidia.css"

// export interface CodeProps {
//     line: number
//     indent: number
//     code: string
//     img?: string
//     type: string

// }

// type CodeTextProps = {
//     text: string
//     type: string
//     indent: number
// }

// const CodeText = ({ text, type, indent }: CodeTextProps) => {

//     return (
//         <Input defaultValue={text}
//             style={{ textIndent: indent * 45 }}
//             display="inline-block"
//             fontFamily="Cascadia Code"
//             variant="unstyled"
//             _focus={{ backgroundColor: "#1C2E3E" }}
//             // readOnly
//             cursor="text"
//             borderRadius="0"
//         />
//     )
// }

// const Code = (props: CodeProps) => (
//     <Flex alignItems="center">
//         <Box as="span"
//             mr="40px"
//             w="20px"
//             display="inline-block"
//             textAlign="right"
//             color="#858585"
//             fontFamily="Cascadia Code"
//         >
//             {props.line}
//         </Box>

//         <CodeText text={props.code} type={props.type} indent={props.indent} />
//     </Flex>
// )

// export default Code

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
                        <Flex>
                            <CodeIndex index={index + 1} />
                            {child}
                        </Flex>
                    </React.Fragment>
                ))}
                <CodeIndex index={arrayChildren.length + 1} />
            </Flex>
        </Box>
    );
}

type CodeLineProps = {
    code?: string
    language: string,
    indent?: number
}

export const CodeLine = ({ code, language, indent = 0 }: CodeLineProps) => (
    <Flex>
        <Box
            as="code"
            style={{ textIndent: indent * 45 }}
            className={`language-${language}`}
        >
            {code}
        </Box>
    </Flex>
)


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
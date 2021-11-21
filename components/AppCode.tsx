import { Box } from "@chakra-ui/react"
import Prism from "prismjs"
import "prismjs/components/prism-json"
import "prismjs/components/prism-markdown"
import "prismjs/components/prism-python"
import React, { useEffect } from "react"
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
    code: string
    language: string
}

export const Code = ({ code, language }: CodeProps) => {
    useEffect(() => {
        Prism.highlightAll();
        console.log(Prism)
    }, []);
    return (
        <Box as="div" className="Code" background="none">
            <Box as="pre">
                <Box as="code" className={`language-${language}`}>{code}</Box>
            </Box>
        </Box>
    );
}


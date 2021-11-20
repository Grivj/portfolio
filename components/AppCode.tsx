import { Box } from "@chakra-ui/react"

export interface CodeProps {
    line: number
    indent: number
    code: string
    img?: string
    type: string

}

type CodeTextProps = {
    text: string
    type: string
    indent: number
}

const CodeText = ({ text, type, indent }: CodeTextProps) => (
    <Box as="span"
        style={{ textIndent: indent * 45 }}
        display="inline-block"
        fontFamily="Cascadia Code"
    >
        {text}
    </Box>
)

const Code = (props: CodeProps) => (
    <Box>
        <Box as="span"
            mr="40px"
            w="20px"
            display="inline-block"
            textAlign="right"
            color="#858585"
            fontFamily="Cascadia Code"
        >
            {props.line}
        </Box>

        <CodeText text={props.code} type={props.type} indent={props.indent} />
        {console.log(props.code.split(/[^a-z_.1-9<>~]/i))}
    </Box>
)

export default Code
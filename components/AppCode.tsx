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
    <Box as="span" style={{ textIndent: indent * 45 }} display="inline-block">
        {text}
    </Box>
)

const Code = (props: CodeProps) => (
    <Box>
        <Box as="span" mr="40px" w="20px" display="inline-block" textAlign="right">{props.line}</Box>
        <CodeText text={props.code} type={props.type} indent={props.indent} />
    </Box>
)

export default Code
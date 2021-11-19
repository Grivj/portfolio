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
}

const CodeText = ({ text }: CodeTextProps) => (
    <Box as="span">
        {console.log(text)}
        {text}
    </Box>
)

const Code = (props: CodeProps) => (
    <Box>
        <Box as="span" mr="40px">{props.line}</Box>
        <CodeText text={props.code} type={props.type} />
    </Box>
)

export default Code
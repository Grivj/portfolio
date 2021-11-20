import { Box, Flex, Input } from "@chakra-ui/react"

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

const CodeText = ({ text, type, indent }: CodeTextProps) => {
    const decomposedText = text.split(/[^a-z_.1-9<>~]/i)
    const decomposedSyntax = text.split(/[a-z_.1-9<>~]/i)
    console.log(text)
    console.log(decomposedText)
    console.log(decomposedSyntax)
    console.log("\n")

    return (
        <Input defaultValue={text}
            style={{ textIndent: indent * 45 }}
            display="inline-block"
            fontFamily="Cascadia Code"
            variant="unstyled"
            _focus={{ backgroundColor: "#1C2E3E" }}
            // readOnly
            cursor="text"
            borderRadius="0"
        />
    )
}

const Code = (props: CodeProps) => (
    <Flex alignItems="center">
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
    </Flex>
)

export default Code
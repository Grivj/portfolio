import Code from "../components/App/Code"

const CodeContent = `
#Griveau Jordan's portfolio

This is my first little project using Next.js


## Stack

- [Next.js](https://nextjs.org/)
- [Chakra UI](https://chakra-ui.com/)


`.trim()

const Contact = () => (
    <Code code={CodeContent} language="markdown" />
)

export default Contact
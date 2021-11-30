import Code from "../components/App/Code"

const CodeContent = `
#Welcome to my portfolio


About this little project...
----------------------------


`.trim()

const Contact = () => (
    <Code code={CodeContent} language="markdown" />
)

export default Contact
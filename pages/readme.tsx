import Code from '../components/App/Code'

const CodeContent = `
#Welcome
`.trim()

const Contact = () => (
    <Code code={CodeContent} language="yaml" />
)

export default Contact
import Code from '../components/App/Code'

const CodeContent = `
#My story...


`.trim()

const Bio = () => (
    <Code code={CodeContent} language="yaml" />
)

export default Bio
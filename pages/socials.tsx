import Code from '../components/App/Code'
import Layout from '../components/App/Layout'

const CodeContent = `
- name: GitHub
  link: https://github.com/Grivj

- name: LinkedIn
  link: https://www.linkedin.com/in/griveau-jordan/
`.trim()

const Contact = () => (
    <Layout>
        <Code code={CodeContent} language="yaml" />
    </Layout>
)

export default Contact
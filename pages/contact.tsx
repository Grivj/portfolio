import Code from '../components/RefactoringApp/Code'
import Layout from '../components/RefactoringApp/Layout'

const CodeContent = `
- name: twitter
  link: https://twitter.com/

- name: twitter
  link: https://twitter.com/

- name: twitter
  link: https://twitter.com/
`.trim()

const Contact = () => (
    <Layout>
        <Code code={CodeContent} language="yaml" />
    </Layout>
)

export default Contact
import Code from '../components/App/Code'

const CodeContent = `
- name: GitHub
  link: https://github.com/Grivj

- name: LinkedIn
  link: https://www.linkedin.com/in/griveau-jordan/

- name: Gmail
  address: griveau.jordan@gmail.com
`.trim()

const Contact = () => (
  <Code code={CodeContent} language="yaml" />
)

export default Contact
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Button, Flex, Link } from "@chakra-ui/react"
import Code from '../components/App/Code'


const CodeContent = `
- name: GitHub
  link: https://github.com/Grivj

- name: LinkedIn
  link: https://www.linkedin.com/in/griveau-jordan/

- name: Gmail
  address: griveau.jordan@gmail.com
`.trim()

const CascadiaLink = ({ title, href }: { title: string, href: string }) => (
  <Link isExternal href={href}>
    <Button fontFamily="Cascadia Code" color="rgb(255, 204, 153)">
      {title}
      <ExternalLinkIcon mx='2px' />
    </Button>
  </Link>
)

const Contact = () => (
  <>
    <Flex ml="3em" m="1em" justifyContent="center" flexWrap="wrap" gridGap="0.5em">
      <CascadiaLink title="GitHub" href="https://github.com/Grivj" />
      <CascadiaLink title="LinkedIn" href="https://www.linkedin.com/in/griveau-jordan/" />
      <CascadiaLink title="Gmail" href="mailto:griveau.jordan@gmail.com" />
    </Flex>

    <Code code={CodeContent} language="yaml" />
  </>
)

export default Contact
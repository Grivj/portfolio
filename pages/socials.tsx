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

const Contact = () => (
  <>
    <Flex ml="3em" m="1em" justifyContent="center" flexWrap="wrap" gridGap="0.5em">
      <Link isExternal href="https://www.linkedin.com/in/griveau-jordan/">
        <Button fontFamily="Cascadia Code" color="rgb(255, 204, 153)">
          LinkedIn
          <ExternalLinkIcon mx='2px' />
        </Button>
      </Link>
      <Link href="mailto:griveau.jordan@gmail.com">
        <Button fontFamily="Cascadia Code" color="rgb(255, 204, 153)">
          Gmail
        </Button>
      </Link>
    </Flex>

    <Code code={CodeContent} language="yaml" />
  </>
)

export default Contact
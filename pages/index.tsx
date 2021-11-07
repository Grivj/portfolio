import { Box, Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/Layout'
import Section from '../components/Section'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        m={10}
        p={10}
        textAlign="center"
        bg={'whiteAlpha.200'}
      >
        Hoy
      </Box>

      <Section delay={0.3}>
        <Heading as="h3">
          Works
        </Heading>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3">
          Education
        </Heading>
      </Section>
    </Container>
  </Layout>
)

export default Home
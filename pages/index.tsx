import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/layout'
const Home = () => (
  <Layout title='Home'>
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
    </Container>
  </Layout>
)

export default Home

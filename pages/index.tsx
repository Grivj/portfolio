import { Box, Container, Heading, Image } from "@chakra-ui/react"

const Home = () => (
  <Container p={["1", "0 10ch"]} maxWidth={"130ch"}>
    <Box display={{ md: 'flex' }}>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
          GRIVEAU Jordan
        </Heading>
        <p>Student, Freelance - Digital craftsman</p>
      </Box>
      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
        <Image
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          maxWidth="100px"
          display="inline-block"
          borderRadius="full"
          src="/"
          alt="Profile image"
        />
      </Box>
    </Box>
  </Container>
)

export default Home
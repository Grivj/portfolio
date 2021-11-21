import { ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from 'next/app'
import Layout from "../components/layouts/Layout"
import theme from "../lib/theme"
import '../styles/globals.css'
import '../styles/AppCode.css'


function App({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default App

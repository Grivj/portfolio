import { ChakraProvider, useDisclosure } from "@chakra-ui/react"
import type { AppProps } from 'next/app'
import { useState } from "react"
import AppLayout from "../components/App/Layout"
import Layout from "../components/layouts/Layout"
import theme from "../lib/theme"
// import '../styles/AppCode.css'
import '../styles/globals.css'


function App({ Component, pageProps, router }: AppProps) {
  const [isMaximized, setIsMaximized] = useState(false)


  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <AppLayout
          isMaximized={isMaximized} setIsMaximized={setIsMaximized}
        >
          <Component {...pageProps} key={router.route} />
        </AppLayout>
      </Layout>
    </ChakraProvider>
  )
}

export default App

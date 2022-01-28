import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react'
const theme = extendTheme({
  fonts: {
    heading: 'Rammetto One',
    body: 'Rammetto One',
  },
})


function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={theme} >
    <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp


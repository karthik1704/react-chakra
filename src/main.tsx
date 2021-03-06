import React from 'react'
import ReactDOM from 'react-dom'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

import { Provider } from 'react-redux'

import { store } from './features/store'

import './index.css'
import App from './App'
import theme from './theme'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

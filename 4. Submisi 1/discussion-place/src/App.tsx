import React from 'react'
import theme from './theme/styledTheme'
import Login from './components/layouts/Login/Login'
import global from './theme/global'
import { Global, ThemeProvider } from '@emotion/react'

const App = (): JSX.Element => {
  return (<ThemeProvider theme={theme}>
    <Global styles={global}/>
    <Login/>
  </ThemeProvider>)
}

export default App

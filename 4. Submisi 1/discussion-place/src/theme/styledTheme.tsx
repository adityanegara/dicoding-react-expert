import { type Theme } from '@emotion/react'

const theme: Theme = {
  layout: {
    mobile: '400px',
    desktop: '1000px'
  },
  colors: {
    primary: {
      red: 'hsl(0, 100%, 74%)',
      darkerRed: '#dc0000',
      green: 'hsl(154, 59%, 51%)',
      darkerGreen: '#2db077'
    },
    accent: {
      blue: 'hsl(248, 32%, 49%)'
    },
    neutral: {
      darkBlue: 'hsl(249, 10%, 26%)',
      grayishBlue: 'hsl(246, 25%, 77%)',
      gray: '#edeff2'
    }
  },
  fonts: {
    size: '15px',
    mainFont: 'Poppins',
    secondaryFont: 'sans-serif'
  }
}

export default theme

import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    layout: {
      mobile: string
      desktop: string
    }
    colors: {
      primary: {
        red: string
        darkerRed: string
        green: string
        darkerGreen: string
      }
      accent: {
        blue: string
      }
      neutral: {
        darkBlue: string
        grayishBlue: string
        gray: string
      }
    }
    fonts: {
      size: string
      mainFont: string
      secondaryFont: string
    }
  }
}

export interface Theme {
  layout: {
    mobile: string
    desktop: string
  }
  colors: {
    primary: {
      red: string
      darkerRed: string
      green: string
      darkerGreen: string
    }
    accent: {
      blue: string
    }
    neutral: {
      darkBlue: string
      grayishBlue: string
      gray: string
    }
  }
  fonts: {
    size: string
    mainFont: string
    secondaryFont: string
  }
}

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
        green: string
      }
      accent: {
        blue: string
      }
      neutral: {
        darkBlue: string
        grayishBlue: string
      }
    }
    fonts: {
      size: string
      mainFont: string
      secondaryFont: string
    }
  }
}

/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx } from '@emotion/react'
import { css } from '@emotion/react/macro'
import theme from './styledTheme'

const global = css({
  body: {
    // eslint-disable-next-line @typescript-eslint/quotes
    backgroundColor: 'salmon',
    margin: 0,
    boxSizing: 'border-box',
    padding: 0,
    overflowX: 'hidden',
    fontFamily: `${theme.fonts.mainFont}, ${theme.fonts.secondaryFont}`
  },
  p: {
    margin: 0,
    fontSize: theme.fonts.size
  },
  'button, input': {
    fontFamily: [theme.fonts.mainFont, theme.fonts.secondaryFont],
    minWidth: '44px',
    minHeight: '44px',
    padding: 0,
    margin: 0
  }
})

export default global

import React from 'react'
import styled from '@emotion/styled'
import Container from '../../atoms/Container'

const LoginWrapper = styled.section(({ theme }) => ({
  backgroundColor: 'salmon',
  display: 'grid',
  gridTemplateAreas: `
  'text'
  'try'
  'form'
 `,
  '.text': {
    color: 'white',
    marginTop: '10vh',
    gridArea: 'text',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '5vh',
    h1: {
      margin: 0,
      padding: 0
    },
    p: {
      lineHeight: '25px'
    }
  },
  '.try': {
    gridArea: 'try',
    button: {
      backgroundColor: theme.colors.accent.blue,
      border: 'none',
      width: '100%',
      height: '100%',
      p: {
        width: '65%',
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    }
  },
  '.form': {
    backgroundColor: 'seagreen',
    gridArea: 'form'
  },
  '@media (min-width: 1000px)': {
    gridTemplateAreas: `
    'text try'
    'text form'
   `
  }
}))

const Login = (): JSX.Element => {
  return (
    <Container>
    <LoginWrapper aria-labelledby="login-page">
      <div className="text">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable
        </p>
      </div>
      <div className="try">
        <button>
          <p>Try it free 7 days then $20/mo. thereafter</p>
        </button>
      </div>
      <div className="form">Login form</div>
    </LoginWrapper>
    </Container>
  )
}

export default Login

import React from 'react'
import styled from '@emotion/styled'
import Container from '../../atoms/Container'
import LoginForm from '../../organisms/LoginForm/LoginForm'

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
    marginBottom: '3vh',
    gridArea: 'try',
    button: {
      cursor: 'pointer',
      paddingTop: '15px',
      paddingBottom: '15px',
      borderRadius: '10px',
      backgroundColor: theme.colors.accent.blue,
      border: 'none',
      boxShadow: 'rgba(0, 0, 0, 0.4) 0px 5px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
      width: '100%',
      height: '100%',
      transition: 'ease-in 0.2s',
      p: {
        '.bold': {
          fontWeight: '700'
        },
        lineHeight: '25px',
        fontWeight: '500',
        color: 'white',
        width: '65%',
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    },
    'button:hover': {
      backgroundColor: '#4c4484'
    }
  },
  '.form': {
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
          <p><span className='bold'>Try it free 7 days </span>then $20/mo. thereafter</p>
        </button>
      </div>
      <div className='form'>
        <LoginForm/>
      </div>
    </LoginWrapper>
    </Container>
  )
}

export default Login

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
    borderRadius: '10px',
    backgroundColor: 'white',
    gridArea: 'form',
    display: 'flex',
    flexDirection: 'column',
    gap: '17px',
    padding: '25px 15px 25px 15px',
    marginBottom: '10vh',
    boxShadow: 'rgba(0, 0, 0, 0.4) 0px 5px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
    input: {
      fontWeight: '600',
      borderRadius: '5px',
      fontFamily: theme.fonts.mainFont,
      padding: '5px 7px',
      border: '1px solid hsl(246, 25%, 77%)',
      color: theme.colors.neutral.darkBlue,
      outline: 'none',
      transition: 'ease-in 0.2s'
    },
    'input:focus': {
      backgroundColor: '#edeff2'
    },
    'input::placeholder': {
      color: theme.colors.neutral.darkBlue,
      fontWeight: '600'
    },
    'input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active': {
      '-webkit-box-shadow': '0 0 0 30px white inset !important'
    },
    button: {
      backgroundColor: theme.colors.primary.green,
      padding: '17px 0px',
      border: 'none',
      borderRadius: '8px',
      color: 'white',
      fontWeight: 'bold',
      boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'
    },
    p: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '90%',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '0.75em',
      color: theme.colors.neutral.grayishBlue,
      a: {
        color: theme.colors.primary.red
      }
    }
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
      <form className="form">
        <input type='text' placeholder='First Name'/>
        <input type='text' placeholder='Last Name'/>
        <input type='email' placeholder='Email Address'/>
        <input type='password' placeholder='Password'/>
        <button type='submit'>CLAIM YOUR FREE TRIAL</button>
        <p>By clicking the button. you are agreeing to our <a>Terms and Services</a></p>
      </form>
    </LoginWrapper>
    </Container>
  )
}

export default Login

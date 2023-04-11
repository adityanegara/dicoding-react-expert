import React from 'react'
import styled from '@emotion/styled'

const TermAndServicesLinkWrapper = styled.p(({ theme }) => ({
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '90%',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '0.75em',
  color: theme.colors.neutral.grayishBlue,
  a: {
    cursor: 'pointer',
    color: theme.colors.primary.red,
    transition: 'ease-in 0.2s'
  },
  'a:hover': {
    color: '#dc0000'
  }
}))

const TermAndServicesLink = (): JSX.Element => {
  return (
    <TermAndServicesLinkWrapper>
      By clicking the button. you are agreeing to our <a>Terms and Services</a>
    </TermAndServicesLinkWrapper>
  )
}

export default TermAndServicesLink

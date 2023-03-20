import React from 'react'
import styled from '@emotion/styled'

const ContainerWrapper = styled.div({
  width: '80%',
  marginLeft: 'auto',
  marginRight: 'auto'
})

const Container = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
        <ContainerWrapper>
            {children}
        </ContainerWrapper>
  )
}

export default Container

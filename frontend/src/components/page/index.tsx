import React from 'react'

import { Container, Content } from './styles'

const Page: React.FC = ({ children }: { children?: React.ReactNode}) => {
  return (
    <Container>
      <Content>
        {children}
      </Content>
    </Container>
  )
}

export default Page

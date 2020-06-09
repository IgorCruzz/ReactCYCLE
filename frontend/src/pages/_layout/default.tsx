import React from 'react'

import { Container } from './styles'
import Header from '../../components/header'
import Footer from '../../components/footer'

interface Props {
  children?: React.ReactNode
}

const Layout: React.FC = ({ children } : Props) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>

  )
}

export default Layout

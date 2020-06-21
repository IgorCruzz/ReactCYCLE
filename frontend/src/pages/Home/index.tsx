import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Content } from './styles'
import frete from '../../assets/FRETE.png'
import bikes from '../../assets/BN1.png'
import parts from '../../assets/BN2.png'
import equipments from '../../assets/BN3.png'

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={frete} alt="frete" />

        <Link to="/bikes"><img src={bikes} alt="bikes" /></Link>
        <Link to="/pecas"><img src={parts} alt="parts" /></Link>
        <Link to="/equipamentos"><img src={equipments} alt="equipments" /></Link>

      </Content>
    </Container>
  )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Content } from './styles'
import logo from '../../assets/logo.png'
import dh from '../../assets/dh.png'

export const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <article>
          <div>
            <strong>Categorias</strong>
            <Link to="/pecas">Peças</Link>
            <Link to="/equipamentos">Equipamentos</Link>
            <Link to="/bikes">Bicicletas</Link>
          </div>
          <span>
            <strong>Conteúdo</strong>
            <Link to="/contato">Fale conosco</Link>
          </span>
          <div>
            <strong>Endereço</strong>
            <p>Rua dr.oliveira, 819 - Teresópolis/RJ</p>
          </div>
        </article>
        <img src={dh} alt="dh" />
        <img src={logo} alt="logo" />
      </Content>
    </Container>
  )
}

export default Footer

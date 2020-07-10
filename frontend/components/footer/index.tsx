import React from 'react'
import Link from 'next/link' 
import { Container, Content, Image } from './styles'
import dh from "../../assets/dh.png"
import logo from "../../assets/logo.png"

export const Footer: React.FC = () => {
  return (
    <Container>
      <Content>

        <article>
          <div id="category">
            <strong>Categorias</strong>
            <Link href="/"><a>Peças</a></Link>
            <Link href="/"><a>Equipamentos</a></Link>
            <Link href="/"><a>Bicicletas</a></Link>
          </div>

          <div id="contact"> 
            <strong>Conteúdo</strong>
            <Link href="/contato"><a>Fale conosco</a></Link>
          </div>

          <div id="address">
            <strong>Endereço</strong>
            <p>Rua dr.oliveira, 819 - Teresópolis/RJ</p>
          </div>
        </article>

        <Image>
          <img src={dh} alt="dh" />
          <img src={logo} alt="logo" />
        </Image>

      </Content>
    </Container>
  )
}

export default Footer

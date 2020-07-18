import React from 'react'
import Link from 'next/link' 
import styles from  './styles.module.scss' 

import dh from "../../public/assets/dh.png"
import logo from "../../public/assets/logo.png"

export const Footer: React.FC = () => {
  return (
    <div id={styles.footerContainer}>
      <div id={styles.footerContent}>

        <article>
          <div id={styles.category}>
            <strong>Categorias</strong>
            <Link href="/"><a>Peças</a></Link>
            <Link href="/"><a>Equipamentos</a></Link>
            <Link href="/"><a>Bicicletas</a></Link>
          </div>

          <div id={styles.contact}> 
            <strong>Conteúdo</strong>
            <Link href="/contato"><a>Fale conosco</a></Link>
          </div>

          <div id={styles.address}>
            <strong>Endereço</strong>
            <p>Rua dr.oliveira, 819 - Teresópolis/RJ</p>
          </div>
        </article>

        <div id={styles.footerImage}>
          <img src={dh} alt="dh" />
          <img src={logo} alt="logo" />
        </div>

      </div>
    </div>
  )
}

export default Footer

import React from 'react'
import Link from 'next/link' 
import Head from 'next/head'
import { Container, Content } from '../styles/home'
import bn1 from "../assets/BN1.png"
import bn2 from "../assets/BN2.png"
import bn3 from "../assets/BN3.png"
import frete from '../assets/FRETE.png'

const Home: React.FC = () => {
  return (
    <>
    <Head>
      <title>ReactCycle - Home</title>
    </Head>
    <Container>
      <Content>
        <img src={frete} alt="frete" />

        <Link href="/bikes"><a><img src={bn1} alt="bikes" /></a></Link>
        <Link href="/parts"><a><img src={bn2} alt="parts" /></a></Link>
        <Link href="/equipments"><a><img src={bn3} alt="equipments"/></a></Link>

        </Content>
    </ Container>
    </>
  )
} 

export default Home
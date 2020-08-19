import React from 'react'
import Link from 'next/link' 
import Head from 'next/head'
import styles from '../styles/home.module.scss' 

import bike from "../public/assets/BN1.png"
import parts from "../public/assets/BN2.png"
import equipments from "../public/assets/BN3.png"
import freight from '../public/assets/FRETE.png'
 
const Home: React.FC = () => {
  return (
    <>
    <Head>
      <title>ReactCycle - Home</title>
    </Head>
    <div id={styles.homeContainer}>
      <div id={styles.homeContent}>
        <img src={freight} alt="frete" />

        <Link href="/bikes"><a><img src={bike} alt="bikes" /></a></Link>
        <Link href="/parts"><a><img src={parts} alt="parts" /></a></Link>
        <Link href="/equipments"><a><img src={equipments} alt="equipments"/></a></Link>

        </div>
    </ div>     
    </>
  )
} 

export default Home
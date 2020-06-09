import React from 'react'

import { Container, Content } from './styles'
import ImageGallery from 'react-image-gallery'
import ReactPlayer from 'react-player'
import img1 from '../../assets/BN1.png'
import img2 from '../../assets/BN2.png'
import img3 from '../../assets/BN3.png'

const images = [
  {
    original: img1,
    thumbnail: img1
  },
  {
    original: img2,
    thumbnail: img2

  },
  {
    original: img3,
    thumbnail: img3

  }
]

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <ImageGallery items={images}/>

        <ReactPlayer width={800} height={600} url='https://www.youtube.com/watch?v=-LpD39oaMO8' />

      </Content>
    </Container>
  )
}

export default Home

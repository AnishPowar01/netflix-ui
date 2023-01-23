import React from 'react'
import styled from 'styled-components'
import background from "../assets/Bg-Img.jpg"
import Footer from './Footer'

function BackgroundImage() {
  return (
    <div>
    <Container>
        <img src={background} alt="Background" srcSet="" />
    </Container>

    {/* <Footer/>
    <Footer/> */}

    </div>
  )
}

const Container = styled.div`
height:100vh;
width:100vw;


img{
    height:100vh;
    width:100vw;
}

`

export default BackgroundImage
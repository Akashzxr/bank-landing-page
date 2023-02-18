import React from 'react'
import styled from 'styled-components'
import desktopbackground from '../../assets/images/bg-intro-desktop.svg'
import mobilepng from '../../assets/images/image-mockups.png'
import Button from '../Button'

export default function DigitalBanking() {
  return (
    <Container>
       <TextContainer>
           <Heading>
             Next generation<br/> digital banking
           </Heading>
           <Paragraph>
             Take your financial life online. Your Easybank account<br/> will be a one-stop-shop
             for spending,saving,<br/>budgeting,investing,and much more.
           </Paragraph>
           <Button/>
       </TextContainer>

       <ImageContainer>
         <Backgroundimg src={desktopbackground}/>
         <Mobileimg src={mobilepng}/>
       </ImageContainer>
       
    </Container>
  )
}

const Container = styled.div`
  background-color: #fafafa;
  display: flex;
  z-index: -1;
  position: relative;
  width: 100%;
  height: 86vh;
`
const TextContainer = styled.div`
  position: relative;
  left: 9rem;
  top: 6rem;
  
`

const Heading = styled.h1`
  font-weight: 200;
  white-space: nowrap;
  font-weight: 200;
  font-size: 3rem;
`
const Paragraph = styled.p`
  white-space: nowrap;
  color: gray;
  font-size: 1.1rem;
  line-height: 1.5;
`

const Backgroundimg = styled.img`
  width: 63rem;
  position: relative;
  bottom: 14rem;
  left: 13rem;
`

const Mobileimg = styled.img`
  position: absolute;
  right: -7rem;
  bottom: -10rem;
  width: 41rem
`

const ImageContainer = styled.div`
  
`
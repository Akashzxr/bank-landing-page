import React from 'react'
import styled from 'styled-components'
import desktopbackground from '../../assets/images/bg-intro-desktop.svg'
import mobilebackground from '../../assets/images/bg-intro-mobile.svg'
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
         <DesktopBackgroundimg src={desktopbackground}/>
         <MobileBackgroundimg src={mobilebackground} />
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
  height: 84vh;
  @media (max-width: 600px){
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
`
const TextContainer = styled.div`
  position: relative;
  left: 9rem;
  top: 6rem;
  @media (max-width: 600px){
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const Heading = styled.h1`
  font-weight: 200;
  white-space: nowrap;
  font-weight: 200;
  font-size: 3rem;
  margin: 0;
  @media (max-width: 600px){
    font-size: 2.3rem;
  }
`
const Paragraph = styled.p`
  white-space: nowrap;
  color: gray;
  font-size: 1.1rem;
  line-height: 1.5;
  @media (max-width: 600px){
    font-size: 0.8rem;
    text-align: center;
    line-height: 1.9;
  }
`

const DesktopBackgroundimg = styled.img`
  width: 63rem;
  position: relative;
  bottom: 14rem;
  left: 13rem;
  @media (max-width: 600px){
    display: none;
  }
`

const MobileBackgroundimg = styled.img`
  display: none;
  width: 24rem;
  position: relative;
  bottom: 5rem;
  left: 0rem;
  @media (max-width: 600px){
    display: block;
  }
`

const Mobileimg = styled.img`
  position: relative;
  right: -18.6rem;
  bottom: 58rem;
  width: 41rem;
  @media (max-width: 600px){
    right: -0.3rem;
    bottom: 36rem;
    width: 22rem;
  }
`

const ImageContainer = styled.div`
  overflow: hidden;
  height: 110vh;
  @media (max-width: 600px){
    height: 43vh;
  }
`
import React from 'react'
import styled from 'styled-components'
import banklogo from '../assets/images/logo.svg'
import facebook from '../assets/images/icon-facebook.svg'
import youtube from '../assets/images/icon-youtube.svg'
import twitter from '../assets/images/icon-twitter.svg'
import pinterest from '../assets/images/icon-pinterest.svg'
import instagram from '../assets/images/icon-instagram.svg'
import Button from './Button'

export default function Footer() {
  return (
    <Container>
      <Details>
          <LogosContainer>
              <MainLogo src={banklogo}/>
              <SocialLogos>
                <a href='www.facebook.com'><Logo src={facebook}/></a>
                <a href='www.youtube.com'><Logo src={youtube}/></a>
                <a href='www.twitter.com'><Logo src={twitter}/></a>
                <a href='www.pinterest.com'><Logo src={pinterest}/></a>
                <a href='www.instagram.com'><Logo src={instagram}/></a>
              </SocialLogos>
          </LogosContainer>

          <Options>
              <Option href='www.example.com'>About Us</Option>
              <Option href='www.example.com'>Contact</Option>
              <Option href='www.example.com'>Blog</Option>
          </Options>

          <Options>
              <Option href='www.example.com'>Careers</Option>
              <Option href='www.example.com'>Support</Option>
              <Option href='www.example.com'>Privacy Policy</Option>
          </Options>
      </Details>

      <BtnTxtcontainer>
        <Button/>
        <Text>© Easybank. All Rights Reserved</Text>
      </BtnTxtcontainer>
    </Container>
  )
}

const Container = styled.div`
  background-color: #2d314e;
  display: flex;
  justify-content: space-around;
  
  padding-top: 3rem;
  padding-bottom: 3rem;
`

const Details = styled.div`
  display: flex;
  gap: 5rem;
  height: 5rem;
`

const LogosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const MainLogo = styled.img`
  color: white;
`

const SocialLogos = styled.div`
  display: flex;
  justify-content: space-between;
`

const Logo = styled.img`
`

const Options = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Option = styled.a`
  text-decoration: none;
  color: white;
  font-size: 14px;
`

const BtnTxtcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
`

const Text = styled.div`
  color: #999bb0;
  font-size: 15px
`
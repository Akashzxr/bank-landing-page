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
                <A href='www.facebook.com'><Logo src={facebook}/></A>
                <A href='www.youtube.com'><Logo src={youtube}/></A>
                <A href='www.twitter.com'><Logo src={twitter}/></A>
                <A href='www.pinterest.com'><Logo src={pinterest}/></A>
                <A href='www.instagram.com'><Logo src={instagram}/></A>
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
  @media (max-width: 600px){
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 50vh;
  }
`

const Details = styled.div`
  display: flex;
  gap: 5rem;
  height: 5rem;
  @media (max-width: 600px){
    flex-direction: column;
    align-items: center;
    gap:1rem;
  }
`

const LogosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 600px){
    gap: 21px;
  }
`

const MainLogo = styled.img`
  color: white;
`

const SocialLogos = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px){
    gap: 26px;
  }
`

const Logo = styled.img`

`

const A = styled.a`
&:hover{
  color: #2cbdbb;
}
`

const Options = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 600px){
    align-items: center;
    gap: 19px;
  }
`

const Option = styled.a`
  text-decoration: none;
  color: white;
  font-size: 14px;
  &:hover{
    color: #2cbdbb;
  }
`

const BtnTxtcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  @media (max-width: 600px){
    align-items: center;
    gap: 13px;
  }
`

const Text = styled.div`
  color: #999bb0;
  font-size: 15px
`
import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/logo.svg'
import hamburger from '../assets/images/icon-hamburger.svg'
import closed from '../assets/images/icon-close.svg'
import Button from './Button'

function Header() {
  return (
    <HeaderContainer>
        <Logo src={logo}/>

        <Menu>
            <A href='#'>Home</A>
            <A href='#'>About</A>
            <A href='#'>Contact</A>
            <A href='#'>Blog</A>
            <A href='#'>Career</A>
        </Menu>
        
        <Buttoncontainer>
          <Button/>
        </Buttoncontainer>
        
        <Hamburgerlogo src={hamburger}/>
        <Closedlogo src={closed}/>
        
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: white;
  @media (max-width: 600px){
    justify-content: space-between;
    padding: 1.2rem 1.8rem 1.2rem 1.8rem;
  }
`
const Logo = styled.img`
  object-fit: contain;
`
const Menu = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 600px) {
    display: none; 
  }
`
const A = styled.a`
  color: grey;
`
const Buttoncontainer = styled.span`
  @media (max-width: 600px) {
    display: none; 
  }
`

const Hamburgerlogo = styled.img`
  display: none;
  @media (max-width: 600px) {
    display: block; 
  }
`

const Closedlogo = styled.img`
  display: none;
`
export default Header
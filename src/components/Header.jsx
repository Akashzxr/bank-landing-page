import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/images/logo.svg'
import hamburger from '../assets/images/icon-hamburger.svg'
import closed from '../assets/images/icon-close.svg'
import Button from './Button'

function Header() {
  const [display,setdisplay] = useState(true);
  return (
    <HeaderContainer>
        <Logo src={logo}/>

        <Menu display={display}>
            <A href='#'>Home</A>
            <A href='#'>About</A>
            <A href='#'>Contact</A>
            <A href='#'>Blog</A>
            <A href='#'>Career</A>
        </Menu>
        
        <Buttoncontainer>
          <Button/>
        </Buttoncontainer>
        
        <Hamburgerlogo src={hamburger} onClick={()=>setdisplay(false)} display={display} />
        <Closedlogo src={closed} onClick={()=>setdisplay(true)} display={display}/>
        
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
    display: ${props => props.display ? 'none' : 'flex'};
    position: absolute;
    background-color: white;
    flex-direction: column;
    left: 2rem;
    top: 5rem;
    border-radius: 10px;
    align-items: center;
    width: 82%;
  }
`
const A = styled.a`
  color: grey;
  &:hover{
    border-bottom: solid 3px transparent;
    border-image: linear-gradient(to right,#31cf70,#2cb9cb);
    border-image-slice: 1;
  }
`
const Buttoncontainer = styled.span`
  @media (max-width: 600px) {
    display: none; 
  }
`


const Hamburgerlogo = styled.img`
  display: none;
  @media (max-width: 600px) {
    display: ${props => props.display ? 'block' : 'none'}
  }
`


const Closedlogo = styled.img`
  display: none;
  @media (max-width: 600px) {
    display: ${props => props.display ? 'none' : 'block'}
  }
`


export default Header
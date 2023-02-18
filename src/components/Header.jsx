import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/logo.svg'
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

        <Button/>
        
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
 
`
const Logo = styled.img`
  object-fit: contain;
`
const Menu = styled.div`
  display: flex;
  gap: 20px;
`
const A = styled.a`
  color: grey;
`
export default Header
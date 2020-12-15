import React from 'react'

import { Container, HeaderPrincipal, LogoContainer, LogoImg, Nav, NavItems, ButtonAdd } from './styles'
import Logo from '../../assets/logo.svg'

// import Header from '../../components/header'


const Home = () => {
  
  return(
  <Container>
    <HeaderPrincipal>
      <LogoContainer>
        <a href="#">
          <LogoImg src={Logo} />
        </a>
      </LogoContainer>
    
    <Nav>
      <NavItems>Home</NavItems>
      <NavItems>Sobre</NavItems>
      <ButtonAdd>Adicionar</ButtonAdd>
    </Nav>

    </HeaderPrincipal>

  </Container>
  )
}

export default Home

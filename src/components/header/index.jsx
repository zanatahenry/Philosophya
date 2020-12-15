import React from 'react'

import { GlobalHeader, Container, LogoImg, MenuItem, ButtonAdd, NavLinks } from './styles'
import Logo from '../../assets/logo.svg'

function header(){

  return(
    <GlobalHeader>
      <Container>
        <a href="#">
          <LogoImg src={Logo} alt="Logo legal" />
        </a>
      </Container>

      <NavLinks>
        <MenuItem>Home</MenuItem>
        <MenuItem>Sobre</MenuItem>
        <ButtonAdd>Adicionar</ButtonAdd>
      </NavLinks>
    </GlobalHeader>
  )

}

export default header
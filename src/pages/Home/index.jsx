import React from 'react'

import { 
  Container, 
  ContainerSection,
  HeaderPrincipal, 
  LogoContainer, 
  LogoImg, 
  Nav, 
  NavItems, 
  ButtonAdd,
  ButtonReceive,
  Title,
  Paragraph,
  SectionPrincipal,
  SectionAddWord } from './styles'

import MaterialIcon from '@material/react-material-icon';

import Logo from '../../assets/logo.svg'
import Man from '../../assets/man.svg'


const Home = () => {
  
  return(
  <Container>
    <HeaderPrincipal>
      <LogoContainer>
        <a href="/">
          <LogoImg src={Logo} />
        </a>
      </LogoContainer>
    
    <Nav>
      <NavItems>Home</NavItems>
      <NavItems>Sobre</NavItems>
      <ButtonAdd>Adicionar frase</ButtonAdd>
    </Nav>
    </HeaderPrincipal>

    
    <SectionPrincipal>
      <ContainerSection>

        <Title>Quer saber o que os filósofos querem falar para você?</Title>

        <Paragraph>Clique no botão e receba uma frase especialmente para você!</Paragraph>

        <ButtonReceive>Receba uma frase!</ButtonReceive>


      </ContainerSection>

        <img src={Man} alt="Imagem filósofo"/>

    </SectionPrincipal>

    <SectionAddWord>
      

    </SectionAddWord>

  </Container>
  )
}

export default Home

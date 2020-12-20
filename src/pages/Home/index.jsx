import React from 'react'

import { 
  Container, 
  ContainerSection,
  HeaderPrincipal,
  FooterPrincipal, 
  LogoContainer, 
  LogoImg, 
  Nav, 
  NavItems, 
  ButtonAdd,
  ButtonReceive,
  Title,
  Paragraph,
  BlackSection,
  WhiteSection } from './styles'

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

import Logo from '../../assets/logo.svg'
import Man from '../../assets/man.svg'
import IdeaImg from '../../assets/lamp.svg'
import About from '../../assets/idea.svg'


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
      <ButtonAdd dark>Adicionar frase</ButtonAdd>
    </Nav>
    </HeaderPrincipal>

    <BlackSection>
      <ContainerSection>

        <Title dark>Quer saber o que os filósofos querem falar para você?</Title>

        <Paragraph dark>Clique no botão e receba uma frase especialmente para você!</Paragraph>

        <ButtonReceive>Receba uma frase!</ButtonReceive>


      </ContainerSection>

        <img src={Man} alt="Imagem filósofo"/>
    </BlackSection>

    <WhiteSection>
      <img src={IdeaImg} alt="Idéia"/>

      <ContainerSection>
        <Title>Quer adicionar novas frases do seu filósofo favorito?</Title>

        <Paragraph>Para adicionar é bem fácil</Paragraph>
        <Paragraph>Basta colocar a frase escolhida por você e o nome do autor.</Paragraph>

        <ButtonAdd>Adicionar nova frase</ButtonAdd>

      </ContainerSection>
    </WhiteSection>

    <BlackSection>
      <ContainerSection>

        <Paragraph dark margin>
          O philosophya é um passa tempo, surgiu para pessoas que adoram a filosofia, 
          e por curiosidade querem receber uma frase de um filósofo.
        </Paragraph>

        <Paragraph dark >
          O projeto foi criado principalmente para fixar os conhecimentos adquiridos em cursos realizados.
        </Paragraph>

      </ContainerSection>

      <img src={About} alt="Sobre"/>

    </BlackSection>

    <FooterPrincipal>
      <LogoContainer>
          <a href="/">
            <LogoImg src={Logo} />
          </a>
      </LogoContainer>

      <Paragraph dark>Feito por Henry Zanata</Paragraph>

      <Nav>
      <NavItems 
        href="https://github.com/zanatahenry"
        target="_blank"
      >
        <FaGithub size={28}/>
      </NavItems>

      <NavItems 
        href="https://linkedin.com/in/henry-zanata"
        target="_blank"
      >
        <FaLinkedin size={28} />
      </NavItems>

      <NavItems
        href="mailto:henryzanata@hotmail.com"
      >
        <FaEnvelope size={28} />
      </NavItems>
    </Nav>

    </FooterPrincipal>

  </Container>
  )
}

export default Home

import styled from 'styled-components';

// Estilos de seções
export const Container = styled.body`
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;
`;

export const HeaderPrincipal = styled.header `
  width: 100%;
  height: 75px;
  background: #212529;
  border-bottom: 1px solid #F8F9FA;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const LogoContainer = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoImg = styled.img `
  width: 210px;
`;

export const Nav = styled.nav `
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SectionPrincipal = styled.section `
  background-color: #212529;
  width: 100%;
  height: 55rem;

  display: flex;
  flex-direction: row;
  
  justify-content: space-evenly;
`;


export const SectionAddWord = styled.section `
  background-color: #F8F9FA;
  width: 100%;
  height: 55rem;

  display: flex;
  flex-direction: row;
`;

export const ContainerSection = styled.div `
  display: flex;
  flex-direction: column;

  align-items: center;
  
`;

// Estilos de textos e links
export const NavItems = styled.a `
  color: #F8F9FA;
  font-size: 18px;
  font-weight: 300;
  text-decoration: none;

  margin-right: 25px;

  cursor: pointer;

  :hover{
    border-bottom: 1px solid #F8F9FA;
    transition: 140ms;
  }
`;

export const ButtonAdd = styled.a `
  color: #F8F9FA;
  font-size: 18px;
  font-weight: 300;
  text-decoration: none;
  padding: 6px;
  cursor: pointer;

  border: 1px solid #F8F9FA;
  border-radius: 4px;

  display: flex;
  align-items: center;

  :hover{
    color: #212529;
    background-color: #F8F9FA;
    transition: 140ms;
  }
`;

export const ButtonReceive = styled.button  `
  color: #F8F9FA;
  background-color: #212529;
  font-size: 18px;
  font-weight: 300;
  text-decoration: none;
  padding: 15px;
  cursor: pointer;
  outline: none;

  margin-top: 10rem;
  margin-left: -150px;

  border: 1px solid #F8F9FA;
  border-radius: 4px;

  :hover{
      color: #212529;
      background-color: #F8F9FA;
      transition: 140ms;
    }
`; 

export const Title = styled.h1 `
  color: #F8F9FA;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 2px;

  width: 500px;
  margin-top: 10rem;
  margin-left: 10rem;
`;

export const Paragraph = styled.p `
  color: #F8F9FA;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 2px;

  width: 500px;
  margin-top: 2rem;
  margin-left: 10rem;


`;
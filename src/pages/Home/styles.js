import styled from 'styled-components';

// Estilos de seções
export const Container = styled.body`
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;
`;

export const FooterPrincipal = styled.footer `
    width: 100%;
    height: 75px;
    background: #212529;
    border-top: 1px solid #F8F9FA;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const HeaderPrincipal = styled.header `
  width: 100%;
  height: 75px;
  background: #212529;
  border-bottom: 1px solid #F8F9FA;
  position: fixed;
  

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

export const BlackSection = styled.section `
  background-color: #212529;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;
  
  justify-content: space-evenly;
`;


export const WhiteSection = styled.section `
  background-color: #F8F9FA;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ContainerSection = styled.div `
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-top: 33px; 
  
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
  color: ${(props) =>(props.dark ? '#F8F9FA' : '#212529')};
  background-color: ${(props) =>(props.dark ? '#212529' : '#F8F9FA')};
  font-size: 18px;
  font-weight: ${(props) =>(props.dark ? '300' : '700')};
  text-decoration: none;
  /* padding: 25px; */
  padding: ${(props) =>(props.dark ? '6px' : '15px')};
  cursor: pointer;

  border: 1px solid;
  border-color: ${(props) =>(props.dark ? '#F8F9FA' : '#212529')};
  border-radius: 4px;

  margin-top: ${(props) =>(props.dark ? '0' : '10rem')};
  margin-right: ${(props) =>(props.dark ? '0' : '10rem')};

  display: flex;
  align-items: center;

  :hover{
    color: ${(props) =>(props.dark ? '#212529' : '#F8F9FA')};
    background-color: ${(props) =>(props.dark ? '#F8F9FA' : '#212529')};
    transition: 140ms;
  }
`;

export const ButtonReceive = styled.button  `
  color: #F8F9FA;
  background-color: #212529;
  font-size: 22px;
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
  color: ${(props) =>(props.dark ? '#F8F9FA' : '#212529')};
  font-size: 34px;
  font-weight: 700;
  letter-spacing: 2px;

  width: 600px;
  margin-top: 10rem;
  margin-left: ${(props) =>(props.modal ? '6rem' : '14rem')};
`;

export const Paragraph = styled.p `
  color: ${(props) =>(props.dark ? '#F8F9FA' : '#212529')};
  font-size: 26px;
  font-weight: 400;
  letter-spacing: 2px;

  width: 600px;
  margin-top: ${(props) =>(props.margin ? '18rem' : '2rem')};
  margin-left: 14rem;
`;
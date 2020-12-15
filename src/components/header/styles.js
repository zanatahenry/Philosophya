import styled from 'styled-components';

export const GlobalHeader = styled.header`
  width: 100%;
  height: 75px;
  background: #212529;
  border-bottom: 1px solid #fff;
  
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Container = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoImg = styled.img `
  width: 210px;
  margin-top: 5px;
`;

export const MenuItem = styled.a `
  color: #F8F9FA;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;

  margin-right: 25px;

  cursor: pointer;

  :hover{
    border-bottom: 1px solid #F8F9FA;
    transition: 140ms;
  }
`;

export const NavLinks = styled.nav `
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonAdd = styled.a `
  color: #F8F9FA;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  padding: 6px;
  cursor: pointer;

  border: 1px solid #F8F9FA;
  border-radius: 4px;

  :hover{
    color: #212529;
    background-color: #F8F9FA;
    transition: 140ms;
  }
`;

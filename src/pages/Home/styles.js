import styled from 'styled-components';

export const Container = styled.body`
  box-sizing: border-box;
  display: flex;
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

export const NavItems = styled.a `
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
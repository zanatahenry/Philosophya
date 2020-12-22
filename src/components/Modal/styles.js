import styled from 'styled-components'

export const ModalGlobal = styled.div `
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;

  background-color: rgba(0, 0, 0, .8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerModal = styled.div `
  background-color: #212529;
  width: 60%;
  height: 60%;
  border-radius: 4px;
`
export const ContentModal = styled.div `
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  align-items: center;
`

export const ButtonClose = styled.button `
  background-color: transparent;
  outline: none;
  border: none;
  width: 32px;
  height: 32px;
  top: 16px;
  right: calc(-100% + 64px);
  cursor: pointer;
  display: flex;
  position: relative;
  align-items: center;

  ::before,
  ::after{
    content: ' ';
    position: absolute;
    width: 2.5px;
    height: 24px;
    background-color: #F8F9FA;
  }

  ::before{
    transform: rotate(45deg)
  }

  ::after{
    transform: rotate(-45deg)
  }
`


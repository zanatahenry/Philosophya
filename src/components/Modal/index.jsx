import React from 'react'

import { ModalGlobal, ContainerModal, ContentModal ,ButtonClose } from './styles'

const Modal = ({ id = 'modal', onClose = () => {}, children }) => {

  const handleOutsideClick = (e) => {
    if(e.target.id === id) onClose();
  }

  return(
    <ModalGlobal id={id} onClick={handleOutsideClick}>
      <ContainerModal>
        <ButtonClose onClick={onClose}/>
        <ContentModal>{children}</ContentModal>
      </ContainerModal>
    </ModalGlobal>
  )
}

export default Modal
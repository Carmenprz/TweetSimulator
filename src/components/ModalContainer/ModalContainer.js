import React from 'react' 

import './ModalContainer.scss' 
import { Modal } from '@material-ui/core'

export const ModalContainer = (props) => {

    const { isOpenModal, closeModal, children } = props; 

    return (
        <Modal className="modal-container" open={isOpenModal} onClose={closeModal}> 
            <div>
                {children}
            </div>
        </Modal>
    )
}
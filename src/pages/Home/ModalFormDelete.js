import React from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button, CardText } from 'reactstrap';
import imgwarning from "../../assets/images/warning.png";
const ModalFormDelete =({modal,toggleDelete,item,handleremove})=> {
    return ( 
        <Modal isOpen={modal}  toggleDelete={()=>toggleDelete()}>
            <ModalHeader toggleDelete={item}>Delete  "{item.name}"</ModalHeader>
            <ModalBody className='border-0 py-4'>
                <div className='text-center'>
                    <img src={imgwarning} alt="no imag" />
                    <CardText tag="h5">Are you sure you want to delete {item.name} With Id {item.id}</CardText>
                </div>
            </ModalBody>
            <ModalFooter className='border-0'>
                <Button color="light" className='me-auto' onClick={toggleDelete}>Cancel</Button>
                <Button color="danger" onClick={handleremove}>Delete</Button>
            </ModalFooter>
        </Modal>
     );
}

export default ModalFormDelete;
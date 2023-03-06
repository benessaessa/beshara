import React from 'react';
import imgwarning from "../../assets/images/warning.png";
import { Modal, ModalBody, ModalHeader, CardText, ModalFooter, Button } from 'reactstrap';
const ModalDelete =({modal,toggle,item,handleremove})=> {
    return ( 
        <Modal isOpen={modal}  toggle={()=>toggle()}>
            <ModalHeader toggle={toggle}>Delete  "{item.firstname}"</ModalHeader>
            <ModalBody className='border-0 py-4'>
                <div className='text-center'>
                    <img src={imgwarning} alt="no imag" />
                    <CardText tag="h5">Are you sure you want to delete {item.firstname} With Id {item.id}</CardText>
                </div>
            </ModalBody>
            <ModalFooter className='border-0'>
                <Button color="light" className='me-auto' onClick={toggle}>Cancel</Button>
                <Button color="danger" onClick={handleremove}>Delete</Button>
            </ModalFooter>
        </Modal>
     );
}

export default ModalDelete;
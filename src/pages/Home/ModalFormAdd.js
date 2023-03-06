import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
const ModalFormAdd =({modal,toggleAdd,handleSubmitForm,handleAddFormChange})=> {
    return ( 
        <Modal isOpen={modal} size="md"  toggle={()=>toggleAdd()}>
            <ModalHeader toggle={toggleAdd}>Create Participant</ModalHeader>
            <ModalBody className='border-0 py-4'>
                <form className="g-3 needs-validation" onSubmit={handleSubmitForm}>
                    <div className="pb-2">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input 
                            name='name'
                            type="text" 
                            className="form-control" 
                            id="name" 
                            required 
                            onChange={handleAddFormChange}
                        />
                    </div>
                    <div className="pb-2">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            name='email'
                            type="email" 
                            className="form-control" 
                            id="email" 
                            required 
                            onChange={handleAddFormChange}
                        />
                    </div>
                    <div className="pb-2">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input 
                            name='phone'
                            type="phone" 
                            className="form-control" 
                            id="phone" 
                            required 
                            onChange={handleAddFormChange}
                        />
                    </div>
                    <div className="col-12">
                        <div className='justify-content-between d-flex pt-3'>
                            <button type='button' className='btn btn-light' onClick={toggleAdd}>Cancel</button>
                            <button className="btn btn-primary" type="submit">Create</button>
                        </div>
                    </div>
                </form>
            </ModalBody>
        </Modal>
     );
}

export default ModalFormAdd;
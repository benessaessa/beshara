import React from "react";
import { CardText, Container, Table } from "reactstrap";
import { useState } from 'react';
import ModalFormAdd from './ModalFormAdd';
import ModalFormDelete from "./ModalFormDelete";
const Home =()=> {
    const [modal,setModal]=useState(false);
    const toggleAdd = () => setModal(!modal);
    const [modalDelete,setModalDelete]=useState(false);
    const toggleDelete = () => setModalDelete(!modalDelete);
    const handleClose = () => setModal(false);
    const handleCloseDelete = () => setModalDelete(false);
    const [selectedItems, setSelectedItems] = useState({});
    const [participants,setParticipants] = useState([
        {id:1,name:"Mohamed Essa",email:"mohamed.essa.alderwy@gmail.com",phone:"01114205243"}
    ]);
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        phone:''
    })
    const handleAddFormChange = (event) =>{
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = {...formData};
        newFormData[fieldName]=fieldValue;
        setFormData(newFormData)
    }
    const handleSubmitForm = (event) =>{
        event.preventDefault();
        const newParticipant = {
            id:participants.length+1,
            name:formData.name,
            email:formData.email,
            phone:formData.phone
        }
        const newParticipants = [...participants,newParticipant];
        setParticipants(newParticipants);
        handleClose();
    }
    const handleRemove = (prod) => {
        let allList = [...participants];
        allList = allList.filter(
            m => m.id !== prod.id
        )
        setParticipants(allList);
        handleCloseDelete();
    };
    return ( 
        <Container className="pt-5 mt-5">
            <div className="d-flex justify-content-between pb-4">
                <CardText tag="h2">Participants ({participants.length})</CardText>
                <button className="btn btn-primary" onClick={()=>{toggleAdd()}}><i className="fas fa-plus"></i> Create Participant</button>
            </div>
            {participants.length?
            <Table className="table-responsive">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {participants.map((participant,item)=>
                    <tr key={item}>
                        <td>{participant.id}</td>
                        <td>{participant.name}</td>
                        <td>{participant.email}</td>
                        <td>{participant.phone}</td>
                        <td>
                            <button className="btn btn-danger" onClick={()=>{toggleDelete();setSelectedItems(participant)}}><i className="fas fa-trash pe-2"></i>Delete</button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </Table>
            : (<p className="text-center">There is no items</p>)}
            {modal && (
                <ModalFormAdd
                    modal={modal}
                    toggleAdd={toggleAdd}
                    handleAddFormChange={handleAddFormChange}
                    handleSubmitForm={handleSubmitForm}
                />
            )}
            {modalDelete && (
                <ModalFormDelete
                    modal={modalDelete}
                    toggleDelete={toggleDelete}
                    item={selectedItems}
                    handleremove={()=>{handleRemove(selectedItems)}}
                />
            )}
        </Container>
    );
}

export default Home;
/* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from 'react';
// import getProducts  from '../../services/products';
// import emptyImage from '../../assets/images/empty.png'
// import Actions from '../../components/Actions';
// const NewPage = () => {
//     const formatData = () =>{
//         return  count === 0 ? 'zero': count;
//     }
//     const [modal, setModal] = useState(false);
//     const toggle = () => setModal(!modal);
//     const [modalAdd,setModalAdd]=useState(false);
//     const toggleAdd = () => setModalAdd(!modalAdd);
//     const [count,setCount]=useState(0);
//     const [list, setList] = useState([
//         {id:5,name:"mohamed",age:25},
//         {id:6,name:"mohamed essa",age:30},
//         {id:7,name:"mohamed Ali",age:36},
//     ]);
//     const [products,setProducts]=useState(getProducts);
//     const classes=()=>{
//         let classes = "badge me-2 bg-";
//         return classes+= count===0 ? "warning" : "primary";
//     }
//     const handleRemoveItem = (item) => {
//         let elements = [...list];
//         elements = elements.filter(
//             m => m.id !== item.id
//         )
//         setList(elements)
//       };
//     const handleRemove = (prod) => {
//         let allProducts = [...products];
//         allProducts = allProducts.filter(
//             m => m.id !== prod.id
//         )
//         setProducts(allProducts)
//     };
//     const [addFormData,setAddFormData]=useState({
//         name:'',
//         salary:''
//     })
//     const handleAddFormChange = (event) =>{
//         event.preventDefault();

//         const fieldName= event.target.getAttribute('name');
//         const fieldValue= event.target.value;

//         const newData = {...addFormData};
//         newData[fieldName]=fieldValue;

//         setProducts(newData);
//     }
//     const handleSubmitForm = (event) =>{
//         event.preventDefault();
//         const newDataS = {
//             name : addFormData.name,
//             salary : addFormData.salary,
//         }   
//         const newDataL = [...addFormData,newDataS]
//         setProducts(newDataL);
//     }
//     return (  
//         <div className='container pt-4'>
//             <span className={classes()}>{formatData(count)}</span>
//             <button className='btn btn-primary' onClick={()=>setCount(count+1)}>Increase</button>
//             <button className='btn btn-info ms-2' onClick={()=>setCount(count-1)}>Decrease</button>
//             <button className='btn btn-info ms-2' onClick={()=>setCount(0)}>Reset</button>
//             {list.length?
//                 <table className='table mt-4'>
//                     <thead>
//                         <tr>
//                             <th>id</th>
//                             <th>name</th>
//                             <th>age</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {list.map((items,index)=>
//                         <tr key={index}>
//                             <td>{items.id}</td>
//                             <td>{items.name}</td>
//                             <td>{items.age}</td>
//                             <td><button className='btn btn-danger' onClick={()=>handleRemoveItem(items)}>Delete</button></td>
//                         </tr>
//                         )}
//                     </tbody>
//                 </table>: 
//                 <div className='text-center'>
//                     <p>there is no items</p>
//                     <img alt='no images' className='img-fluid' src={emptyImage} />
//                 </div>
//             }
//             {products.length?
//             <table className='table mt-4'>
//                 <thead>
//                     <tr>
//                         <th>id</th>
//                         <th>name</th>
//                         <th>Salary</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {products.map((product,index)=>
//                     <tr key={index}>
//                         <td>{product.id}</td>
//                         <td>{product.name}</td>
//                         <td>{product.salary}</td>
//                         <td><button className='btn btn-danger' onClick={()=>{handleRemove(product);}}>Delete</button></td>
//                     </tr>
//                     )}
//                 </tbody>
//             </table>: null }
            
//             <Actions />
//         </div>
//     );
// }

// export default NewPage;

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
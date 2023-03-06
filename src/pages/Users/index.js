import { useEffect, useState } from "react";
import axios from "axios";
const Users = () => {
    const [newUsers,setNewUsers]=useState([]);
    useEffect(()=>{
        async function getData(){
            const result = await axios('https://jsonplaceholder.typicode.com/users');
            setNewUsers(result.data);
            console.log(result.data)
        }
        getData();
    },[])
    const handleRemoveItem = (item) => {
        let elements = [...newUsers];
        elements = elements.filter(
            m => m.id !== item.id
        )
        setNewUsers(elements)
    };
    return ( 
        <div className="container pt-5 mt-5">
            <h1>Users</h1>
            <div className="table-responsive mt-2">
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>username</th>
                            <th>email</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {newUsers.map((anewUser,index)=>
                        <tr key={index}>
                            <td>{anewUser.id}</td>
                            <td>{anewUser.name}</td>
                            <td>{anewUser.username}</td>
                            <td>{anewUser.email}</td>
                            <td>{anewUser.address.city}</td>
                            <td><button className="btn btn-danger" onClick={()=>handleRemoveItem(anewUser)}>Delete</button></td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default Users;
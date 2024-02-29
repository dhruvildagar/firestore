import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useLocation , useNavigate } from 'react-router-dom';
// import firebase from 'firebase/compat';
// import firebase from 'firebase/app';
// import 'firebase/firestore';

 
//     // Initialize Firebase
//     if (!firebase.apps.length) {
//         firebase.initializeApp({
//             apiKey: "AIzaSyBQVUpaq7jMV1IG6zgjXBajss5IWdJyA8w",
//             authDomain: "crud-firebase-1edf1.firebaseapp.com",
//             projectId: "crud-firebase-1edf1",
//         });
//     }
    
    
const Create = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const Id = location.state;
    const[data,setData] = useState({Name:Id.Name, Email:Id.Email, PhoneNo:Id.PhoneNo});
    const[data1,setData1] = useState({Name:Id.Name, Email:Id.Email, PhoneNo: Id.PhoneNo});

    console.log(Id)

   

    const handleChange=(e)=>{
        setData({...data, [e.target.name]: e.target.value });
    };

    const handleChange1=(e)=>{
        setData1({...data1, [e.target.name]: e.target.value });
    };


// Function to upload data to the Firestore database
const addDoc = (e) => {
    const db = firebase.firestore();
    db.collection("CRUD").add({
        Name: data.Name,
        Email: data.Email,
        PhoneNo: data.PhoneNo
    });
    alert("Data Added Succcesfully");
    navigate("/")
    console.log('Data Addedd successfully');
};

const handleUpdate = (id) => {
        const db = firebase.firestore(); 
        console.log(id);
        db.collection("CRUD").doc(id).update({
            Name: data1.Name,
            Email: data1.Email,
            PhoneNo: data1.PhoneNo
        })
        alert("Data Updated Succcesfully")
        navigate("/")
        console.log('Data updated successfully');
    }


    return (
        
            <div className='row'>   
            <div className='col-md-4'>
             <div className='mb-2 mt-2'>
        <div className='bg-primary p-4 text-center'>
            <h1>CREATE DATA</h1>
        </div> 
            <form>

            {Id.Name !== '' ?
            <div> 
                <input type="text" name="Name" placeholder='Enter Your Name' value={data1.Name} onChange={handleChange1}/>
                <br/>
        
                <input type="email" name="Email" placeholder='Enter Your Email' value={data1.Email} onChange={handleChange1}/><br/>  
                <input type="number" name="PhoneNo" placeholder='Enter Your Contact' value={data1.PhoneNo} onChange={handleChange1}/>
                <br/>
                <button type='button' className='btn btn-info' onClick={() => handleUpdate(Id.id)}>Edit </button>
                
            </div>
               
                : 
                <div> 

                <input type="text" name="Name" placeholder='Enter Your Name' value={data.Name} onChange={handleChange}/>
            <br/>
           
                <input type="email" name="Email" placeholder='Enter Your Email' value={data.Email} onChange={handleChange}/><br/>
               
                <input type="number" name="PhoneNo" placeholder='Enter Your Contact' value={data.PhoneNo} onChange={handleChange}/>
                <br/>
                <button className='btn btn-info' onClick={addDoc}>Create</button>
                </div>

            }               
                
            </form>
            
        </div>
        </div>
        </div>
    );
 }



export default Create;

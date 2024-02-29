import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { Link, useNavigate } from "react-router-dom";

// Initialize Firebase (make sure you replace this config with your own)
const firebaseConfig = {
  apiKey: "AIzaSyBQVUpaq7jMV1IG6zgjXBajss5IWdJyA8w",
  authDomain: "crud-firebase-1edf1.firebaseapp.com",
  databaseURL: "https://crud-firebase-1edf1-default-rtdb.firebaseio.com",
  projectId: "crud-firebase-1edf1",
  storageBucket: "crud-firebase-1edf1.appspot.com",
  messagingSenderId: "451600165912",
  appId: "1:451600165912:web:84dd5a4d75ce200a26276d",
  measurementId: "G-4BNGXKPHDW",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
};

const db = firebase.firestore();

const View = () => {

  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const data1 ={Name: '', Email:'', PhoneNo: ''};

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdate = (id) => {
    console.log("call");
    navigate("/create", {state : id});
  };

  const fetchData = async () => {
    try {
      const snapshot = await db.collection("CRUD").get();
      const fetchedData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(fetchedData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleDelete = (id) => {
    const docIdToDelete = id;
    db.collection("CRUD")
      .doc(docIdToDelete)
      .delete()
      .then(() => {
        alert("Data Deleted Succesfully");
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  console.log(data);

  return (
    <div style={{ marginTop: "100px" }}>
      <h2>Firestore Data</h2>
      <button  className="btn btn-danger" onClick={() => handleUpdate(data1)}>Add Data</button>

      <table className="table-info table table-striped table-bordered">
        <thead>
          <tr className="table-info">
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.Name}</td>
              <td>{item.Email}</td>
              <td>{item.PhoneNo}</td>
              <td>
               
                  <button
                    className="btn btn-primary"
                    onClick={() => handleUpdate(item)}
                  >
                    Edit
                  </button>
                
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default View;

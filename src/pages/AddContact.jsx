import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
function AddContact() {
   const[name,setName]=useState("");
   const[email,setEmail]=useState("");
   const[number,setNumber]=useState("");

  
  const contacts = useSelector((state) => state);
  const dispatch =useDispatch();
  const navigate=useNavigate();

   const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail =contacts.find(contact => contact.email === email && email);
    const checkNumber =contacts.find(contact => contact.number === parseInt(number) );
    if (!email || !name || !number) {
      return alert("Please fill in all fields!!");
    }
    if (checkEmail) {
      return alert("This email already exists!!");
    }
    if (checkNumber) {
      return alert("This phone number already exists!!");
    }

    const data = {
      id: contacts[contacts.length - 1].id + 1 ,
      email,
      name,
      number,
    };
    console.log(data)

    dispatch({type:"ADD_CONTACT", payload:data});
    return alert("Contact added successfully!!");
    navigate('\)'
    
    )
   
  };
return (
    
   
        <div className='body'>
      <div className="jumbotron bg-transparent p-4 text-center shadow">
            <h3>Add Contact </h3>    </div>
            <div className="col-mid-6 shadow mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" placeholder="Name" className="form-control" value={name} onChange={e=>setName(e.target.value)}
                  />
                  </div>
                  <div className="form-group">
                  <input type="email" placeholder="Email" className="form-control" value={email} onChange={e=>setEmail(e.target.value)}
                  />
                  </div>
                 
                  <div className="form-group">
                  <input type="number" placeholder="Phone number"className="form-control"value={number} onChange={e=>setNumber(e.target.value)} />
                  </div>
                  <div className="form-group">
                  <input type="submit" value="Add Contact"className="btn btn-block btn-dark "/>
                  </div>
                
              </form>
            </div>
        </div>
        

  )
}

export default AddContact


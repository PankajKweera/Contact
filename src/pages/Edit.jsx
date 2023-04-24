import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link,useParams } from 'react-router-dom'
function Edit() {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[number,setNumber]=useState("");
  const{id} =useParams();
  const contacts=useSelector(state=>state);
  const dispatch =useDispatch();
  const currentContact = contacts.find(contact=>contact.id === parseInt(id));

  useEffect(()=>{  
    if(currentContact){
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
     
    }


},[currentContact]);

const handleSubmit = (e) => {
  e.preventDefault();
  const checkEmail =contacts.find(
    
    (contact) => contact.id !== parseInt(id) && contact.email === email
  );
  const checkNumber =contacts.find(
    (contact) => contact.id!==parseInt(id) &&contact.number ===parseInt
    (number)
  );
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
    id: parseInt(id),
    email,
    name,
    number,
  };
console.log(data);

  dispatch({type:"UPDATE_CONTACT", payload:data});
  return alert("Contact Updated successfully!!");
 
};



  return (
 
    <div className="bg-cyan-300	background-color: rgb(103 232 249);" >
      {currentContact? (
< >

    <div className="bg-lime-100	background-color: rgb(236 252 203) text-4xl  text-center ...>" >
          <h3>EDIT Contact of Id -{id}</h3>    </div>
          
            <form onSubmit={handleSubmit}>

            <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            First Name
            </label>

              
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type=  "text" placeholder="Name" className="form-control" value={name} onChange={e=>setName(e.target.value)}/>
                </div>

              

                <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Email
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="email" placeholder="Email"className="form-control"value={email} onChange={e=>setEmail(e.target.value)}/>
                </div>
                </div>

                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
               Number
                </label>
     
                <input  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="number" placeholder="Phone number"className="form-control"value={number}onChange={e=>setNumber(e.target.value)}/>
              
                <div className="form-group">
                <input type="submit" value="Edit"className="btn btn-blue text-2xl"/>
                

                

                <Link to="/">
                  
                  <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                CANCEL
              </button>
              
              </Link>

                </div>
              
            </form>
          
              </>
      ):(
        <h1 className="display-3 text center"> Student with id {id} is not presenr</h1>
      )}
      </div>
      

)
}

export default Edit
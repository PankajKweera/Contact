import React from 'react'
import { id } from 'date-fns/locale';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
function Contact() {
    const navigate = useNavigate()
    const contacts =useSelector(state=>state);
    const dispatch =useDispatch();
    const deleteContact=(id)=>{
      dispatch({type:"DELETE_CONTACT",payload:id});
      return alert("DEleted");
    }
  return (


    
         <div>
    <Link to="/addcontact">
                  
    <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  ADD CONTACT
</button>

</Link>
<div className="bg-cyan-900 flex justify-center items-center h-screen">
    <table className="shadow-2xl font-[Poppins] border-cyan-200 w-6/12">
        <thead className="text-white">
            <tr>
            <th class ="py-3 bg-cyan-800">Id</th>
            <th class ="py-3 bg-cyan-800">Name</th>
            <th class ="py-3 bg-cyan-800">Email</th>
            <th class ="py-3 bg-cyan-800">Number</th>
            
            <th class ="py-3 bg-cyan-800">Action</th>
          
            </tr>


        </thead>
        <tbody cl="text-cyan-900 text-center">

            {
                contacts.map((contact,id)=>(
                    <tr class ="bg-cyan-200 cursor-pointer duration-300" key={id}>
                        <td class="py-3 px-6">{id+1}</td>
                        <td class="py-3 px-6" >{contact.name}</td>
                        <td class="py-3 px-6">{contact.email}</td>
                        <td class="py-3 px-6">{contact.number}</td>
                        {/* <td class="py-3 px-6">{contact.action}</td> */}
                        <td> <div className="flex justify-center ...">
                            <Link to={`/edit/${contact.id}`}className ="btn btn-small btn-primmary">EDIT</Link>
                            <button type="button" onClick={()=> deleteContact(contact.id
                                )} className="tn btn-small btn-danger">   DELETE</button>
                                </div>
                        </td>


                        </tr>
                ))
            }
        </tbody>

    </table>
</div>
</div>
  )
        }
export default Contact
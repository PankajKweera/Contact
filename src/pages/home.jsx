import { id } from 'date-fns/locale';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import App from '../App';
import {HiMenuAlt3} from "react-icons/hi";
import {AiOutlineUser} from "react-icons/ai";
import{MdOutlineDashboard} from "react-icons/md";


import React from 'react';


function HomePage() {
    const menus =[
           {name:"Contact",link:'/contact',icon: MdOutlineDashboard},
           {name:"Chart And Map",link:'/',icon: AiOutlineUser},
        
        

    
    ]
  const navigate = useNavigate()
  const contacts =useSelector(state=>state);
  const dispatch =useDispatch();
  const deleteContact=(id)=>{
    dispatch({type:"DELETE_CONTACT",payload:id});
    return alert("DEleted");
  }
  return (
    <section className="flex gap-6">

        <div className="bg-[#0e0e0e] min-h-screen w-72 text-gray-100 px-4">
            <div className="py-3 flex justigy-end">
            <HiMenuAlt3 size={26} className ="cursor-pointer" />
            </div>
            <div className="mt-4 flex flex-col gap-4 relative">
                {
                    menus?.map((menu,i)=>(

                
            <Link to={menu?.link} key={i} className="flex items-center text-sm gap-3.5 font medium p-2 hover:bg-gray-800 rounded-md">
                <div>{React.createElement(menu?.icon,{ size:"20"})}</div>
                <h2>{menu?.name}</h2>
                
            </Link>
                    ))
}
                
            </div>
            </div>
        
                
         <div className="text-5xl text-emerald-400 text-align: center	color: rgb(52 211 153) ;">
        
            OBECTIVE-PAGE </div> 
            

    

        
        </section>
  )
}
export default HomePage

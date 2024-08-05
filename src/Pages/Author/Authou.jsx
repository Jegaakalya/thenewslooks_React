import React, { useEffect, useState } from 'react'
import { CiCirclePlus } from "react-icons/ci";
import AdminNavBar from '../../components/AdminNavBar/AdminNavBar';
import { MdOutlineModeEditOutline, MdDeleteOutline} from "react-icons/md";
import { CommanFetch } from '../../graphene-axois/axoiss';
import { allCustomuser } from '../../qraphql/Query'; 
import UserDetailsPopup from '../../components/Popup/userDetailsPopup';

const Authou = () => {
  const [userList , setUserList] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [editId , setEditId] = useState(null)
 
  async function fetchuser(params) {
    const response = await CommanFetch(allCustomuser())
    if (response?.success){
        setUserList(response?.data)
    } else{
        console.error(response.error);
    }   
  }

  useEffect(()=>{
    fetchuser()

  }, [])
  return (
    <div className='container   '> 
        <div className='flex justify-center items-center '>
            <div>
            {/* <div className='flex justify-end m-2'>
                <button className='flex justify-center items-center gap-2 w-20 text-gray-800 p-2 
                rounded-md border border-dotted border-blue-500 hover:bg-blue-500
                 hover:text-white font-bold ' onClick={()=>{setIsOpen(true)}} >
                    Add <span> <CiCirclePlus/></span>
                </button>                       
            </div> */}
            <ul className=''>
            {userList?.map(({ id, username , email}) => (
                <div className='flex items-center gap-2'>  
                    <li key={id} className='cursor-pointer font-semibold w-96 bg-gray-800 flex items-center justify-center py-2 rounded-md m-2'>
                    <span className='text-white'>{username}</span> 
                    </li>
                    <MdOutlineModeEditOutline className='text-green-600 text-2xl border 
                    rounded-full p-1 border-green-600 cursor-pointer group hover:bg-green-500
                     hover:text-white' 
                     onClick={()=>{setIsOpen(true); setEditId(id)}}
                     />
                    <MdDeleteOutline className='text-red-600 text-2xl border rounded-full p-1
                     border-red-600 cursor-pointer group
                      hover:bg-red-500 hover:text-white'
                    //    onClick={()=>{setIsOpenForm(true)}}
                       />
                </div> 
            ))}
            </ul>
            </div>
        </div>
  
        <UserDetailsPopup
        isShow ={isOpen}  
        setIsShow =  {setIsOpen}
        fetchuser = {fetchuser}
        editId={editId}
        setEditId = {setEditId}
        />
    </div>
  )
}

export default Authou

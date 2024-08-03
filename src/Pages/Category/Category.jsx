import React , {useContext, useState} from 'react'
import AdminNavBar from '../../components/AdminNavBar/AdminNavBar';
import DataContext from '../../context/MainContext';
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineModeEditOutline, MdDeleteOutline} from "react-icons/md";
import CategoryForm from './model/CategoryForm';

const Category = () => {
    const {categoryLits} = useContext(DataContext)
 
    const [isOpenForm , setIsOpenForm] = useState(false)
    const [editData, setEditData] = useState()
    
  return (
    < >
     <div className='container   '>
        <AdminNavBar />
        <div className='flex justify-center items-center '>
            <div>
            <div className='flex justify-end m-2'>
                <button className='flex justify-center items-center gap-2 w-20 text-gray-800 p-2 
                rounded-md border border-dotted border-blue-500 hover:bg-blue-500
                 hover:text-white font-bold ' onClick={()=>{setIsOpenForm(true)}}  >
                    Add <span> <CiCirclePlus/></span>
                </button>                       
            </div>
            <ul className=''>
            {categoryLits?.map(({ id, name }) => (
                <div className='flex items-center gap-2'>  
                    <li key={id} className='cursor-pointer font-semibold w-96 bg-gray-800 flex items-center justify-center py-2 rounded-md m-2'>
                    <span className='text-white'>{name}</span> 
                    </li>
                    <MdOutlineModeEditOutline className='text-green-600 text-2xl border 
                    rounded-full p-1 border-green-600 cursor-pointer group hover:bg-green-500
                     hover:text-white' onClick={()=>{setIsOpenForm(true); setEditData({id:id})}}/>
                    <MdDeleteOutline className='text-red-600 text-2xl border rounded-full p-1
                     border-red-600 cursor-pointer group
                      hover:bg-red-500 hover:text-white' onClick={()=>{setIsOpenForm(true)}}/>
                </div> 
            ))}
            </ul>
            </div>
        </div>
    </div>
    <CategoryForm 
    isShow={isOpenForm}
    setIsShow={setIsOpenForm}
    editData={editData}
    />
      
    </ >
  )
}

export default Category

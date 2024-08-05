import React, { useState, useEffect} from 'react' 
import { CommanFetch } from '../../graphene-axois/axoiss';
import { CiCirclePlus } from "react-icons/ci";
import { allPost } from '../../qraphql/Query';
import { MdOutlineModeEditOutline, MdDeleteOutline} from "react-icons/md";
import PostForm from './Model/PostForm';

const PostList = () => {
    const [postList , setPostList] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    async function fetchuser(params) {
        const response = await CommanFetch(allPost())
        if (response?.success){
            setPostList(response?.data)
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
        <div className='flex justify-end m-2'>
            <button className='flex justify-center items-center gap-2 w-20 text-gray-800 p-2 
            rounded-md border border-dotted border-blue-500 hover:bg-blue-500
             hover:text-white font-bold ' onClick={()=>{setIsOpen(true)}} >
                Add <span> <CiCirclePlus/></span>
            </button>                       
        </div>
        <ul className=''>
        {postList?.map(({ id, title }) => (
            <div className='flex items-center gap-2'>  
                <li key={id} className='cursor-pointer font-semibold w-96 bg-gray-800 flex items-center justify-center py-2 rounded-md m-2'>
                <span className='text-white  p-4'>{title}</span> 
                </li>
                <MdOutlineModeEditOutline className='text-green-600 text-2xl border 
                rounded-full p-1 border-green-600 cursor-pointer group hover:bg-green-500
                 hover:text-white' 
                //  onClick={()=>{setIsOpenForm(true); setEditData({id:id})}}
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
        <PostForm
        isShow = {isOpen} 
        setIsShow = {setIsOpen}
        />
    </div>
   
</div>
  )
}

export default PostList

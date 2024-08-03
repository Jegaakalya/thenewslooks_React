import React , {useMemo, useState, useRef} from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5' 
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PostForm = ({isShow, setIsShow}) => {
 
  return (
    <div>
    {isShow ? (
       <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 backdrop-blur-sm'>
       <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md 
       duration-200 w-[700px]'>
           {/* header sections */}
           <div className='flex justify-between items-center '>
               <div>
                   <h1 className='text-2xl font-bold'>
                      Post
                   </h1>
               </div>
               <div>
                   <IoCloseCircleOutline
                    className='text-2xl cursor-pointer'
                    onClick={()=>{setIsShow(false)}}
                   />
               </div>

           </div>
           {/* Login Form sections */}
           <div className="mt-4">
  
           <input
              type='text'
              placeholder='Enter Title'
              name='username'
               
              className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2
              py-3 mb-4 '
            />
            <div style={{height:"20rem"}}>
              <ReactQuill theme="snow"  />
            </div>
             
          


           
            <div className='flex justify-center my-2'>
                <button className='w-full text-white p-2 rounded-md bg-blue-500 font-bold '  >
                    Save
                </button> 
            </div>

           </div>

       </div>

   </div>
    ) : null}
  </div>
  )
}

export default PostForm

import React, { useEffect } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
const UserDetailsPopup = ({isShow, setIsShow}) => {
    useEffect(()=>{
        console.log(isShow);
    },[isShow])
  return (
    <>
      {isShow && 
         <div>
            <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 backdrop-blur-sm'>
                <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md 
                duration-200 w-[500px]'>
                    {/* header sections */}
                    <div className='flex justify-between items-center '>
                        <div>
                            <h1 className='text-2xl font-bold'>
                                User 
                            </h1>
                        </div>
                        <div>
                            <IoCloseCircleOutline
                             className='text-2xl cursor-pointer'
                             onClick={()=>{setIsShow(false)}}
                            />
                        </div>

                    </div>
                    {/* user Form sections */}
                    <div className="mt-4">
                            <div className='flex justify-center my-4'>
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    className="h-28 w-28 rounded-full"
                                />
                            </div>
                            <label for="price" class="block text-sm font-medium leading-6 text-gray-900">User Name</label>
                            <input
                                type='text'
                                placeholder='Enter User Name'
                                className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2
                                py-3 mb-2 '
                            />
                            <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                            <input
                                type='text'
                                placeholder='Enter Phone Number'
                                className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2
                                py-3 mb-2 '
                            />
                            <label for="price" class="block text-sm font-medium leading-6 text-gray-900">State</label>
                            <input
                                type='text'
                                placeholder='Enter State'
                                className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2
                                py-3 mb-2'
                            />
                             <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Date Of Birth</label>
                             <input
                                type='date'
                                placeholder='Enter Date Of Birth'
                                className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2
                                py-3 mb-2'
                            />
                            {/*  */}
                            <div className='flex justify-center'>
                                <button className='w-full text-white p-2 rounded-md bg-blue-500 font-bold ' onClick={()=>{setIsShow(false)}}>
                                    Save
                                </button>
                                
                            </div>
                               
                    </div>

                </div> 
            </div>
         </div>
      }
    </>
  )
}

export default UserDetailsPopup

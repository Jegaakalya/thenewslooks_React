import React ,{useEffect, useState} from 'react'
import Select from 'react-select';
import { MdDelete } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa"; 
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { AiOutlineYoutube , AiOutlineWhatsApp , AiOutlineFacebook, AiOutlineLinkedin , AiOutlineInstagram } from "react-icons/ai";


const Admin = () => {
  const [navigation , setNavigation] = useState([{id : 1 , name: 'Post', current: true },
    {id : 2 ,  name: 'Category',  current: false },
    {id : 3 , name: 'User',   current: false }])
 

  const handleNavigation = (item) => { 
      setNavigation(prev => {
          // Clone the previous state to avoid mutating it directly
          const updatedNavigation = [...prev];

          // Find the item to update
          const currentItem = updatedNavigation.find(navItem => navItem.id === item.id);

          if (currentItem) {
              // Update the current item's `current` property
              currentItem.current = true;

              // Update other items to ensure only one item is current
              updatedNavigation.forEach(navItem => {
                  if (navItem.id !== currentItem.id) {
                      navItem.current = false;
                  }
              });
              console.log(updatedNavigation);
              // Return the updated navigation state
              return updatedNavigation;
          }

          // If item is not found, return previous state unchanged
          return prev;
      });
  };

  return (
    < >
       {/* <div>
           <AdminNavBar 
            navigation = {navigation}
            handleNavigation = {handleNavigation}
           />
          
           {navigation?.map(({id, name, current})=>{ 
              if (id === 1 && current) {
                return <PostList key={id} />;
              }
              if (id === 2 && current) {
                return <Category key={id} />;
              }
              if (id === 3 && current) {
                return <Authou key={id} />;
              }
              return null;
           })}
       </div> */}
         <div className='flex flex-col md:flex-row h-screen'>
  {/* <!-- Sidebar --> */}
  <div className='w-full md:w-2/12 bg-PrimarebgColor'>
    <div className='flex mx-3 my-3 items-center'>
      <div>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-10 w-10 rounded-lg"
        />
      </div>
      <div className='text-center justify-center w-full font-semibold text-white'>
        Jegathish
      </div>
    </div>
    <hr className='border-2 border-white my-3' />
    <div className='px-2'>
      <p className='text-white font-semibold'>Admin - Jegathish</p>
      <p className='text-white font-semibold'>District - Karur</p>
    </div>
    <hr className='border-2 border-white my-3' />
    <div>
      <p className='p-2 text-white font-semibold flex items-center gap-2'><FiPlusCircle /> <span>New</span></p>
      <p className='p-2 text-white font-semibold flex items-center gap-2'><MdOutlinePublishedWithChanges /> <span>Published</span></p>
      <p className='p-2 text-white font-semibold flex items-center gap-2'><AiOutlineFieldTime /><span>Scheduled</span></p>
      <p className='p-2 text-white font-semibold flex items-center gap-2'><MdDelete /><span>Trash/Deleted</span></p>
    </div>
    <hr className='border-2 border-white my-3' />
    <p className='p-2 text-white font-semibold flex items-center gap-2'><FaRegEye /> <span>View</span></p>
  </div>

  {/* <!-- Main Content --> */}
  <div className='w-full md:w-3/5 h-screen bg-white mx-4'>
    <div className='h-screen shadow-md'>
      <div className='mx-4 items-center'>
        <div>
          <h1 className='text-2xl font-bold'>Post</h1>
        </div>
      </div>
      <div className='mx-4 resize'>
        <input
          type='text'
          placeholder='Enter Title'
          name='username'
          className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-3 mb-4'
        />
        <div className='overflow-auto' style={{ height: "70%" }}>
          <ReactQuill theme="snow" />
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Sidebar Right --> */}
  <div className='w-full md:w-2/12 shadow-md flex flex-col justify-between  '>
    <div>
      <p className=' m-3 font-semibold'>Status: Draft</p>
      <div className='mx-3 my-2'>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        Categories
          </label>
        <Select
        className='py-1.5'
          placeholder="Categories"
          />
      </div>
      <div className='mx-3 my-2'>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              SEO focus keyword
          </label>
          <div className="mt-2">
              <input 
                type="text"
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
          </div>
      </div>
    </div>
    <div className='mx-3'>
      <p> Share Immediately All Social Media </p>
      <div className='flex gap-2 m-3'>
              <AiOutlineYoutube className=''  />
              <AiOutlineWhatsApp className=''/>
              <AiOutlineFacebook className=''/>
              <AiOutlineLinkedin className=''/>
              <AiOutlineInstagram className=''/>
      </div>
    </div>
  </div>
</div>

    </ >
  )
}

export default Admin

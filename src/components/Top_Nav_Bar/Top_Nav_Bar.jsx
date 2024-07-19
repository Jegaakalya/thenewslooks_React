import React, { useContext } from 'react'
import mainloga from "../../assets/NEWS-OUTLOOK-logo.webp"
import { AiOutlineYoutube , AiOutlineWhatsApp , AiOutlineFacebook, AiOutlineLinkedin , AiOutlineInstagram } from "react-icons/ai";
import {   Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import DataContext from '../../context/MainContext';
const TopNavBar = ({catagery}) => {
  const { categoryLits} = useContext(DataContext)
  return (
    <>
    <div className='shadow-md pb-5'>
        <div className='flex justify-between  m-2 mt-3 '>
            {/* icon links  */}
            <div className='flex gap-2'>
              <AiOutlineYoutube className='hoverColor'  />
              <AiOutlineWhatsApp className='hoverColor'/>
              <AiOutlineFacebook className='hoverColor'/>
              <AiOutlineLinkedin className='hoverColor'/>
              <AiOutlineInstagram className='hoverColor'/>
            </div>
            {/* Languages */}
            <div>
           
               <p> <span className='hoverColor'>ENGLISH</span> | <span className='hoverColor'>தமிழ்</span> | <span className='hoverColor'>বাংলা</span> | <span className='hoverColor'>മലയാളം</span> | <span className='hoverColor'>ગુજરાતી</span> | <span className='hoverColor'>हिंदी</span> | <span className='hoverColor'>मराठी</span> | <span className='hoverColor'>बिज़नेस</span> </p>
            </div>
            {/* user profile */}
            <div>
            
              <Menu as="div" className="relative ml-3 ">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="h-8 w-8 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <MenuItem>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                      Your Profile
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                      Settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                      Sign out
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
        </div>
        <img src={mainloga} alt='Logo' className='scale-75 mb-4' />
        <div className='mx-10'>
          
          <div >
              <ul className='flex  gap-4 flex-wrap '>
                  {categoryLits?.map(({id, name})=>( 
                     <li key={id} className='cursor-pointer font-semibold'>
                     <a href={"/"+id} className= ' text-black/70  hover:text-red-600'>{name}</a>
                   </li>
                  ))}
              </ul>
          </div>
        </div>
    
    </div>

    </>
  )
}

export default TopNavBar

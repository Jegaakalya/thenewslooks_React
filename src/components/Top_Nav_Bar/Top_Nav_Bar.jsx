import React, { useContext, useState } from 'react'
import mainloga from "../../assets/NEWS-OUTLOOK-logo.webp"
import { AiOutlineYoutube , AiOutlineWhatsApp , AiOutlineFacebook, AiOutlineLinkedin , AiOutlineInstagram } from "react-icons/ai";
import {   Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import DataContext from '../../context/MainContext';
import Popup from '../Popup/Popup';
import UserDetailsPopup from '../Popup/userDetailsPopup';
const TopNavBar = ({catagery}) => {
  const { categoryLits, userData, isAuthenticate, setIsAuthenticate, logout} = useContext(DataContext) 
  const [isShow, setIsShow] = useState(false)
  const [isShowUserModel, setIsShowUserModel] = useState(false)
  
  return (
    <>
    <div className='shadow-md pb-5 bg-gray-800'>
        <div className='flex justify-between      '>
            {/* icon links  */}
            <div className='flex gap-2 m-3'>
              <AiOutlineYoutube className='hoverColor'  />
              <AiOutlineWhatsApp className='hoverColor'/>
              <AiOutlineFacebook className='hoverColor'/>
              <AiOutlineLinkedin className='hoverColor'/>
              <AiOutlineInstagram className='hoverColor'/>
            </div>
            {/* Languages */}
            <div className='m-3'>
           
               <p> <span className='hoverColor'>ENGLISH</span> | <span className='hoverColor'>தமிழ்</span> | <span className='hoverColor'>বাংলা</span> | <span className='hoverColor'>മലയാളം</span> | <span className='hoverColor'>ગુજરાતી</span> | <span className='hoverColor'>हिंदी</span> | <span className='hoverColor'>मराठी</span> | <span className='hoverColor'>बिज़नेस</span> </p>
            </div>
            {/* user profile */}
            <div className='m-3'>
              {!isAuthenticate ?
              <>
                <button className="rounded-md bg-red-600 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-red-500  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={()=>{setIsShow(true)}}
                >
                Sign Up
              </button>
              </>
              :
              <>
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
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100" onClick={()=>{setIsShowUserModel(true)}}>
                        Your Profile
                      </a>
                    </MenuItem>
                    {userData?.isReporter || userData?.isadmin ? 
                       <MenuItem>
                       <a href="/Admin" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"  >
                         Admin Page
                       </a>
                     </MenuItem>
                     :
                     ""
                    }
                   
                    <MenuItem>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                        Settings
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      onClick={logout}>
                        Sign out
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </>}
            
              
            </div>
        </div>
        <img src={mainloga} alt='Logo' className='scale-75 mb-4' />
        <div className='mx-10'>
          
          <div >
              <ul className='flex  gap-4 flex-wrap '>
                  {categoryLits?.map(({id, name})=>( 
                     <li key={id} className='cursor-pointer font-semibold'>
                     <a href={"/"+id} className= ' text-black/70 text-white  hover:text-red-600'>{name}</a>
                   </li>
                  ))}
              </ul>
          </div>
        </div>
        <Popup
        isShow = {isShow}
        setIsShow = {setIsShow}
        setIsAuthenticate = {setIsAuthenticate}
        />
        {isShowUserModel && 
        <UserDetailsPopup
        isShow = {isShowUserModel}
        setIsShow = {setIsShowUserModel}
        
      />
        }
        
    </div>

    </>
  )
}

export default TopNavBar

import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { IoCloseCircleOutline } from 'react-icons/io5'
import axiosInstance from '../../../graphene-axois/axoiss';
import { usercreateMutations } from '../../../qraphql/userMutations';

const AuthorForm = ({ isShow, setIsShow, fetchuser }) => {
  const [userData, setUserData] = useState({username:"", email:"", password:""})
  
 
  const handleInputLogInChange = (e) => {
    const { name, value } = e.target;  // Destructure name and value directly from e.target
    setUserData(prev => {
        return { ...prev, [name]: value };  // Use bracket notation to update the state dynamically
    });
  };

  async function validateCreateUser(signUp) {
    const errors = []; 
    if (!signUp.email) {
        errors.push("Email required");
    } else if (!signUp.username || !signUp.username.trim()) {
        errors.push("Username required");
    } else if (!signUp.password) {
        errors.push("Password required");
    }  

   
    // Optional: Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (signUp.email && !emailPattern.test(signUp.email)) {
        errors.push("Invalid email format");
    }

    // Optional: Validate password strength
    if (signUp.password && signUp.password.length < 8) {
        errors.push("Password must be at least 8 characters long");
    }
    // You can add more password validation rules here if needed

    
    // Return results
    return {
        isValid: errors.length === 0,
        errors
    };
} 

async function handleSignUp() {
    const validation = await validateCreateUser(userData);
    if (!validation.isValid) { 
        alert(validation.errors)
       
    } else { 
        let parameter = `email: "${userData.email}", password: "${userData.password}", username: "${userData.username}"`
         
        try{
            const respones = await axiosInstance.post('/graphql/' , 
            {query: usercreateMutations(parameter)}); 
            let responesData = respones.data.data.rigister
            if (responesData.success){ 
                fetchuser()
                setUserData({username:"", email:"", password:""})
                setIsShow(false)
            } else{
                alert(responesData.errors)
            }
            
          } catch(error){
            alert(error) 
          }
    }
}
  return (
    <div>
      {isShow ? (
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
             {/* Login Form sections */}
             <div className="mt-4">
    
             <input
                type='text'
                placeholder='Enter User Name'
                name='username'
                value={userData.username}
                className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2
                py-3 mb-4 '
                onChange={handleInputLogInChange}
                />
                <input
                type='email'
                name='email'
                value={userData.email}
                placeholder='Enter Email' 
                onChange={handleInputLogInChange}
                className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2
                py-3 mb-4'
                />
                <input
                type='password'
                name='password'
                value={userData.password}
                placeholder='Enter Password' 
                onChange={handleInputLogInChange}
                className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2
                py-3 mb-4'
                />
                <div class="flex justify-around ps-2">
                    <div> 
                        <input type="checkbox" id="Is_User" className="Is_User mx-2" value="user"/>
                        <label for="Is_User">Is User</label>
                    </div> 
                    <div>
                        <input type="checkbox" id="Is_Repoter" className="Is_Repoter mx-2" value="reporet"/>
                        <label for="Is_Repoter">Is Repoter</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Is_Admin" className="Is_Admin mx-2" value="admin"/>
                        <label for="Is_Admin">Is Admin</label>
                    </div>
                </div> 
                <div className='flex justify-center my-2'>
                    <button className='w-full text-white p-2 rounded-md bg-blue-500 font-bold ' onClick={handleSignUp}>
                        Save
                    </button> 
                </div>

             </div>

         </div>

     </div>
      ) : null}
    </div>
  );
};

export default AuthorForm;

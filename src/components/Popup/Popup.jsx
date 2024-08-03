import React, { useContext, useState } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { ToastContainer, toast , Bounce} from 'react-toastify';
import { loginMutation, usercreateMutations } from '../../qraphql/userMutations';
import axiosInstance from '../../graphene-axois/axoiss';
import DataContext from '../../context/MainContext';
import { login } from '../../auth';

const Popup = ({isShow, setIsShow, setIsAuthenticate}) => {
    const {userData, setUserData} = useContext(DataContext)
    const [isLogin, setIsLogin] = useState(true)
    const [signUp, setSignUp] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
    })
    const [loginData, setloginData] = useState({Email:"",password:"" })
    
 
    const handleInputChange = (e) => {
        const { name, value } = e.target;  // Destructure name and value directly from e.target
        setSignUp(prev => {
            return { ...prev, [name]: value };  // Use bracket notation to update the state dynamically
        });
    };
    const handleInputLogInChange = (e) => {
        const { name, value } = e.target;  // Destructure name and value directly from e.target
        setloginData(prev => {
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
        } else if (!signUp.password2) {
            errors.push("Confirm password required");
        }
    
        // Check if passwords match
        if (signUp.password !== signUp.password2) {
            errors.push("Passwords must match");
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
        const validation = await validateCreateUser(signUp);
        if (!validation.isValid) { 
            alert(validation.errors)
           
        } else { 
            let parameter = `email: "${signUp.email}", password: "${signUp.password}", username: "${signUp.username}"`
             
            try{
                const respones = await axiosInstance.post('/graphql/' , 
                {query: usercreateMutations(parameter)}); 
                let responesData = respones.data.data.rigister
                if (responesData.success){
                    setIsLogin(true)
                    setSignUp({ username: '',
                        email: '',
                        password: '',
                        password2: '',})
                } else{
                    alert(responesData.errors)
                }
                
              } catch(error){
                alert(error) 
              }
        }
    }
    
    // async function login( ){
    //     let error = []
    //     if (!loginData?.Email ||  !loginData.Email.trim()){
    //         error.push("Email required");
    //     }
    //     if (!loginData?.password ||  !loginData.password.trim()){
    //         error.push("password required");
    //     }
    //     if (error.length === 0){
    //         let parameter = `email: "${loginData.Email}", password: "${loginData.password}"`
    //         try{
    //             const respones = await axiosInstance.post('/graphql/' , 
    //             {query: loginMutation(parameter)}); 
    //             let responesData = respones.data.data.loginMutation
    //             if (responesData.success){ 
    //                 setUserData({id:responesData?.user?.id, name: responesData?.user?.username,
    //                     isUser: responesData?.user?.isUser,  isReporter: responesData?.user?.isReporter,
    //                     isadmin: responesData?.user?.isadmin,
    //                 })
    //                 localStorage.setItem('id', responesData?.user?.id)
    //                 localStorage.setItem('name', responesData?.user?.username)
    //                 localStorage.setItem('isUser', responesData?.user?.isUser)
    //                 localStorage.setItem('isReporter', responesData?.user?.isReporter)
    //                 localStorage.setItem('isadmin', responesData?.user?.isadmin)
    //                 setIsShow(false)
    //                 setloginData({Email:"",password:"" })
    //                 setIsAuthenticate(true)
    //                 console.log({id:responesData?.user?.id, name: responesData?.user?.username});
                  
    //             } else{
    //                 alert(responesData.errors)
    //             }
                
    //           } catch(error){
    //             alert(error) 
    //           }
             
    //     } else{
    //         console.log(error);
    //     }

        
    // }

  return (
    < >
     
      {isShow && 
         <div>
            {/* <ToastContainer/> */}
             
            <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 backdrop-blur-sm'>
                <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md 
                duration-200 w-[500px]'>
                    {/* header sections */}
                    <div className='flex justify-between items-center '>
                        <div>
                            <h1 className='text-2xl font-bold'>
                               {isLogin ? "Login" : "Sign Up"} 
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
           
                        {isLogin ?
                            <>
                                <input
                                type='text'
                                placeholder='Enter Email'
                                name='Email'
                                value={loginData.Email}
                                className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2
                                py-3 mb-4 '
                                onChange={handleInputLogInChange}
                                />
                                <input
                                type='password'
                                name='password'
                                value={loginData.password}
                                placeholder='Enter Password' 
                                onChange={handleInputLogInChange}
                                className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2
                                py-3 mb-4'
                                />
                                <div className='flex justify-center'>
                                    <button className='w-full text-white p-2 rounded-md bg-blue-500 font-bold' onClick={()=>{login(	loginData.Email , loginData?.password)}}>
                                        Login
                                    </button> 
                                </div>
                                <div className='flex justify-center'>
                                    <button className='w-1/2 text-blue-500 p-2 rounded-md  font-bold ' onClick={()=>{setIsLogin(false)}}>
                                        Sign Up
                                    </button>
                                </div>
                            </> : 
                            <div className=''>
                                <div>
                                    <input
                                    type='text'
                                    placeholder='User Name'
                                    className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2
                                    py-3 mb-4 '
                                    name='username'
                                    value={signUp.username}
                                    onChange={handleInputChange}
                                    />
                                </div>
                                <div className=' '> 
                                    <input
                                    type='email'
                                    placeholder='Email'
                                    name='email'
                                    value={signUp.email}
                                    onChange={handleInputChange}
                                    className=' w-full rounded-md border border-gray-300 dark:border-gray-500 px-2
                                    py-3 mb-4 '
                                    />
                                     <input
                                    type='password'
                                    placeholder='Password'
                                    name='password'
                                    value={signUp.password}
                                    onChange={handleInputChange}
                                    className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2
                                    py-3 mb-4'
                                    />
                                     <input
                                    type='password'
                                    placeholder='Confirm Password'
                                    name='password2'
                                    value={signUp.password2}
                                    onChange={handleInputChange}
                                    className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2
                                    py-3 mb-4'
                                    />
                                </div>
                                 
                                <div className='flex justify-center'>
                                    <button className='w-full text-white p-2 rounded-md bg-blue-500 font-bold ' onClick={handleSignUp}>
                                        Sign Up
                                    </button> 
                                </div>
                                <div className='flex justify-center'>
                                    <button className='w-1/2 text-blue-500 p-2 rounded-md  font-bold ' onClick={()=>{setIsLogin(true)}}>
                                        Login
                                    </button>
                                </div>
                                 
                            </div>
                        }

                    </div>

                </div>

            </div>
         </div>
      }
      
    </ >
  )
}

export default Popup

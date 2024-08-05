import React, { useContext, useState } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { ToastContainer, toast , Bounce} from 'react-toastify';
import { loginMutation, usercreateMutations } from '../../qraphql/userMutations';
import axiosInstance from '../../graphene-axois/axoiss';
import DataContext from '../../context/MainContext';
import { login } from '../../auth';
import { Formik, Field, Form } from 'formik';
import { loginSchema, signUpSchema } from '../../Schemas/userSchemas';

const Popup = ({isShow, setIsShow, setIsAuthenticate}) => {
    const {userData, setUserData} = useContext(DataContext)
    const [isLogin, setIsLogin] = useState(true)
    
   
    const handlesubmit = async (values, { setSubmitting, resetForm }) => { 
        let loginParameter = ` email: "${values['email']}",  password: "${values['password']}"`
          
        try {
            const respones = await axiosInstance.post('/graphql/' , 
                            {query: loginMutation(loginParameter)}); 
            let responesData = respones.data.data.loginMutation
            if (responesData.success){ 
                setUserData({id:responesData?.user?.id, name: responesData?.user?.username,
                    isUser: responesData?.user?.isUser,  isReporter: responesData?.user?.isReporter,
                    isadmin: responesData?.user?.isadmin,
                })
                localStorage.setItem('id', responesData?.user?.id)
                localStorage.setItem('name', responesData?.user?.username)
                localStorage.setItem('isUser', responesData?.user?.isUser)
                localStorage.setItem('isReporter', responesData?.user?.isReporter)
                localStorage.setItem('isadmin', responesData?.user?.isadmin)
                setIsShow(false) 
                setIsAuthenticate(true) 
                resetForm()
                // toast(
                //   'Successfully login.',
                //   {
                //     position: 'top-center',
                //     autoClose: 800,
                //     hideProgressBar: true,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: 0,
                //     theme: 'light',
                //     className: 'custom-toast'
                //   }
                // )
                
            } else{ 
                alert(responesData.errors)
                // toast.error(`${responesData.errors}`, {
                //     position: 'top-center',
                //     autoClose: 2000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //     theme: 'light'
                //   })
            } 
         
        } catch (error) {
            alert(error.message) 
            // toast.error(`${error.message}`, {
            //   position: 'top-center',
            //   autoClose: 2000,
            //   hideProgressBar: false,
            //   closeOnClick: true,
            //   pauseOnHover: true,
            //   draggable: true,
            //   progress: undefined,
            //   theme: 'light'
            // })
        }
        setSubmitting(false)
      }
    const createUser = async(values, {setSubmitting, resetForm}) =>{ 
         let parameter = `email: "${values?.email}", password: "${values?.password}", username: "${values?.username}"`
             
         try{
             const respones = await axiosInstance.post('/graphql/' , 
             {query: usercreateMutations(parameter)}); 
             let responesData = respones.data.data.rigister
             if (responesData.success){
                 setIsLogin(true)
                 resetForm()
                 toast(
                    'User Created Successfully.',
                    {
                      position: 'top-center',
                      autoClose: 800,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: 0,
                      theme: 'light',
                      className: 'custom-toast'
                    }
                  )
             } else{
                alert(responesData.errors)
                // toast.error(`${responesData.errors}`, {
                //     position: 'top-center',
                //     autoClose: 2000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //     theme: 'light'
                //   })
             }
             
           } catch(error){
            alert(error)
            // toast.error(`${error}`, {
            //     position: 'top-center',
            //     autoClose: 2000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: 'light'
            //   })
           }
         setSubmitting(false)
    }

  return (
    < >
     
      {isShow && 
         <div> 
             
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
                                <Formik
                                initialValues={{ email: '', password: '' }}
                                    onSubmit={handlesubmit}
                                    validationSchema={loginSchema}
                                >
                                    {({ errors, touched, isSubmitting, setFieldValue }) => (
                                    <Form className=''>
                                        
                                        <div className=' '> 
                                            <Field
                                            type='text'
                                            name='email'
                                            
                                            placeholder='Enter Email'
                                            
                                            className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2
                                        py-3 mb-4 '
                                            />
                                            {touched.email && errors.email && (
                                            <small>{errors.email}</small>
                                            )}
                                                <Field
                                            type='password'
                                            name='password'
                                            
                                            placeholder='Enter Password'
                                            
                                            className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2
                                        py-3 mb-4 '
                                            />
                                               {touched.password && errors.password && (
                                            <small>{errors.password}</small>
                                            )}
                                        </div>
                                        <div className='flex justify-center'>
                                            <button  type='submit' className='w-full text-white p-2 rounded-md bg-blue-500 font-bold'  disabled={isSubmitting}>
                                                Login
                                            </button> 
                                        </div>
                                        <div className='flex justify-center'>
                                            <button className='w-1/2 text-blue-500 p-2 rounded-md  font-bold ' onClick={()=>{setIsLogin(false)}}>
                                                Sign Up
                                            </button>
                                        </div>
                                    </Form>
                                    )}
                                </Formik>
                            </> : 
                        
                            <>
                                <Formik
                                initialValues={{username : "",  email: '', password: '', password2: '' }}
                                    onSubmit={createUser}
                                    validationSchema={signUpSchema}
                                >
                                    {({ errors, touched, isSubmitting, setFieldValue }) => (
                                    <Form className=''>
                                         {console.log(errors)}
                                        <div className=' '>
                                            <Field
                                                type='text'
                                                name='username' 
                                                placeholder='Enter Name' 
                                                className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2
                                            py-3 mb-4 '
                                            />
                                            {touched.username && errors.username && (
                                            <small>{errors.username}</small>
                                            )}
                                            <Field
                                            type='text'
                                            name='email' 
                                            placeholder='Enter Email' 
                                            className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2
                                        py-3 mb-4 '
                                            />
                                            {touched.email && errors.email && (
                                            <small>{errors.email}</small>
                                            )}
                                            <Field
                                            type='password'
                                            name='password'
                                            
                                            placeholder='Enter Password'
                                            
                                            className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2
                                        py-3 mb-4 '
                                            />
                                               {touched.password && errors.password && (
                                            <small>{errors.password}</small>
                                            )}
                                            <Field
                                            type='password'
                                            name='password2'
                                            
                                            placeholder='Enter Password'
                                            
                                            className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2
                                        py-3 mb-4 '
                                            />
                                               {touched.password2 && errors.password2 && (
                                            <small>{errors.password2}</small>
                                            )}
                                        </div>
                                        <div className='flex justify-center'>
                                            <button  type='submit' className='w-full text-white p-2 rounded-md bg-blue-500 font-bold'  disabled={isSubmitting}>
                                            Sign Up
                                            </button> 
                                        </div>
                                        <div className='flex justify-center'>
                                            <button type='button' className='w-1/2 text-blue-500 p-2 rounded-md  font-bold ' onClick={()=>{setIsLogin(false)}}>
                                               
                                                Login
                                            </button>
                                        </div>
                                    </Form>
                                    )}
                                </Formik>
                            </>
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

import React, { useEffect } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { allCustomuser, Customuser } from '../../qraphql/Query';
import { CommanFetch } from '../../graphene-axois/axoiss';
import { Formik, Field, Form } from 'formik';
import { ToastContainer, toast , Bounce} from 'react-toastify';
import axiosInstance from '../../graphene-axois/axoiss';
import { usercreateMutations } from "../../qraphql/userMutations";
import { createUserSchema } from '../../Schemas/userSchemas';

const UserDetailsPopup = ({isShow, setIsShow, editId, setEditId}) => {

    async function fetchUserData(params){ 
        const response = await CommanFetch(Customuser(`id:${editId}`))
        if (response){
            // console.log(response?.data?.[0]);
            // setUserList(response?.data)
        } else{
            // console.error(response.error);
        }   
        
    }

    useEffect(()=>{
    if(isShow && editId){
        fetchUserData(editId)
    }
    }, [isShow, editId])

    function Close(params) {
        setEditId('')
        setIsShow(false)
        
    }
    const createUser = async(values, {setSubmitting, resetForm}) =>{ 
        let parameter = `email: "${values?.email}", password: "${values?.password}", username: "${values?.username}"`
            
        try{
            const respones = await axiosInstance.post('/graphql/' , 
            {query: usercreateMutations(parameter)}); 
            let responesData = respones.data.data.rigister
            console.log(responesData)
            if (responesData.success){
                setIsShow(false)
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
                             onClick={Close}
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
                      
                             <Formik
                                initialValues={{ username : "",  email: '', phoneNumber:"", password:"" }}
                                    onSubmit={createUser}
                                    validationSchema={createUserSchema}
                                >
                                    {({ errors, touched, isSubmitting, setFieldValue }) => (
                                    <Form className=''>
                                        
                                        <div className=' '> 
                                            <Field
                                            type='text'
                                            name='username'
                                            
                                            placeholder='Enter Name'
                                            
                                            className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2
                                        py-3 mb-4 '
                                            />
                                            {touched?.username && errors.username && (
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
                                            type='text'
                                            name='Phone'
                                            
                                            placeholder='Enter Phone Number'
                                            
                                            className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2
                                        py-3 mb-4 '
                                            />
                                               {touched.phoneNumber && errors.phoneNumber && (
                                            <small>{errors.phoneNumber}</small>
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
                                                Save
                                            </button> 
                                        </div>
                                       
                                    </Form>
                                    )}
                                </Formik> 
                               
                    </div>

                </div> 
            </div>
         </div>
      }
    </>
  )
}

export default UserDetailsPopup

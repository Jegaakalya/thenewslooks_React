import React ,{useContext, useEffect, useState} from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import axiosInstance from '../../../graphene-axois/axoiss';
import { CategoryMutation } from '../../../qraphql/userMutations';
import DataContext from '../../../context/MainContext'; 
import { allCategory } from '../../../qraphql/Query';

const CategoryForm = ({isShow, setIsShow, editData}) => {
    const {userData, fetchCatagory} = useContext(DataContext)
    const [isChecked, setIsChecked] = useState(true);
    const [initialValue, setInitialValue] = useState({
        id : "",
        name : "",
        createdby:"",
    })
    const [name, setName] = useState()

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the checked state
  };
  
  useEffect(() => {
    // Define an async function inside useEffect
    const fetchData = async () => {
        if (isShow && editData?.id) {
            try {
                const response = await axiosInstance.post('/graphql/', {
                    query: allCategory(`id:${editData.id}`)
                });
                const responseData = response.data.data.allCategory; 
                setName(responseData?.[0]?.['name'])
                setInitialValue({
                    id: responseData?.[0]?.['id'] ? Number(responseData?.[0]?.['id']) : 0,
                    name : responseData?.[0]?.['name'],
                    createdby : responseData?.[0]?.['createdBy']?.id ? Number(responseData?.[0]?.['createdBy']?.id) : null,
                })
            } catch (error) {
                alert(error);
            }
        }
    };

    // Call the async function
    fetchData();
}, [isShow, editData]);

  const Close=()=>{
    setName("")
    setIsChecked(true)
    setIsShow(false)
  }

   const submit=async()=>{
    const errors = []; 
    if (!name || !name.trim())(
        errors.push("Category Name is required")
    ) 
    if (errors.length ===0){
        try{
            let parameter = `createdBy:  ${initialValue?.id ? Number(initialValue.createdby): userData.id}, id: "${initialValue?.id ? Number(initialValue?.id):""}", name: "${name}", modifieBy: ${initialValue?.id? userData.id: null }`
            const respones = await axiosInstance.post('/graphql/' , 
            {query: CategoryMutation(parameter)}); 
            let responesData = respones.data.data.categoryCreateMutation
            if (responesData.success){
                
                fetchCatagory()
                Close()
                
            } else{
                alert(responesData.errors)
            }
          } catch(error){
            alert(error) 
          }
    } else{
        alert(errors) 
    }
  }
  return (
    <div>
        {isShow ?   <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 backdrop-blur-sm'>
                <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md 
                duration-200 w-[500px]'>
                    {/* header sections */}
                    <div className='flex justify-between items-center '>
                        <div>
                            <h1 className='text-2xl font-bold'>
                               Category
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
                        <div className=''>
                                <div>
                                    <input
                                    type='text'
                                    value={name}
                                    placeholder='Enter User Name'
                                    className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2
                                    py-3 mb-4 '
                                    onChange={(e)=>{setName(e.target.value)}}
                                    />
                                </div>
                                <div>
                                    {/* <label className="inline-flex items-center">
                                        <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 text-blue-600"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                        />
                                        <span className="ml-2 text-gray-700">Active</span>
                                    </label> */}
                                </div>
                                
                                <div className='flex justify-center'>
                                    <button className='w-full text-white p-2 rounded-md bg-blue-500 font-bold ' onClick={submit}  >
                                        Save
                                    </button>
                                   
                                </div>
                                 
                        </div>

                    </div>

                </div>

        </div> : 
        <></> }
       
      
    </div>
  )
}

export default CategoryForm

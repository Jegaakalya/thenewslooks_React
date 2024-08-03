import React from 'react'
import TopNavBar from '../../components/Top_Nav_Bar/Top_Nav_Bar';

const MainPage = ({catagery}) => {
  return (
    < >
      <TopNavBar catagery={catagery}/>
       <div className='mx-10 mt-5'>
            <div>
                {catagery?.map(item=>(
                    <>
                       <div key={item?.id} className='my-3'>
                            {item?.toppost?.length > 0? 
                            <>
                                <h4 className='font-semibold my-2 underline underline-offset-8 decoration-blue-400 cursor-pointer'>
                                    {item?.name}
                                </h4>
                                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                                    {item?.toppost?.map(post => (
                                        <div key={post?.id} className='border p-2 cursor-pointer'>
                                        <img src={post?.image} alt='post' className='w-full h-48' />
                                        <p className='text-wrap text-sm font-semibold '>{post?.title}</p>
                                        </div>
                                    ))}
                                    <div>

                                    </div>
                                </div>
                            </> :  ""
                            }
                           
                       </div>
                    </>
                ))}
                
            </div>
             
       </div>
    </ >
  )
}

export default MainPage

import React, { createContext, useEffect, useState,   } from 'react'
import axiosInstance from '../graphene-axois/axoiss';



const DataContext = createContext({})
export const DataProvider = ({ children }) =>  {
    const [categoryLits, setCategoryLits] = useState([])
    let mutation= `query MyQuery {
        allCategory {
          name
          id
           
        }
      }`
    async function fetchCatagory(params) { 
        try{
            const respones = await axiosInstance.post('/graphql/' , 
            {query: mutation}); 
            let responesData = respones.data.data.allCategory
            console.log(responesData);
            setCategoryLits(responesData)
        } catch(error){
                console.log(error);
        }
        
    }
    useEffect(()=>{
        fetchCatagory()
    }, [])
   
  
      return (
  
          <DataContext.Provider value={{ 
            categoryLits ,  
          }}>
          
           {children}
          </DataContext.Provider>
  
      )
  }
  export default DataContext
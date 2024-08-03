import React, { createContext, useEffect, useState,   } from 'react'
import axiosInstance from '../graphene-axois/axoiss';



const DataContext = createContext({})
export const DataProvider = ({ children }) =>  {
    const [categoryLits, setCategoryLits] = useState([])
    const [userData, setUserData] = useState({id:"", name:"", isUser:false, isReporter:false, isadmin:false})
    const [isAuthenticate, setIsAuthenticate]  = useState(false)
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
         
            setCategoryLits(responesData)
        } catch(error){
                console.log(error);
        }
        
    }
    useEffect(()=>{
        fetchCatagory()
        if (localStorage.getItem('id')) {
   
          setUserData({id:localStorage.getItem('id'), name: localStorage.getItem('name'),
            isUser: localStorage.getItem('isUser'),  isReporter: localStorage.getItem('isReporter'),
            isadmin: localStorage.getItem('isadmin'),
        })
        setIsAuthenticate(true)
        }
    }, [])
    
    function logout(params) {
      setUserData({id:"", name: "",
        isUser: false,  isReporter: false,
        isadmin: false,
    })
    localStorage.setItem('id', '')
    localStorage.setItem('name', '')
    localStorage.setItem('isUser', '')
    localStorage.setItem('isReporter', '')
    localStorage.setItem('isadmin', '')
    setIsAuthenticate(false)
      
    }

 
   
      return (
  
          <DataContext.Provider value={{ 
            categoryLits , 
            userData, setUserData,
            isAuthenticate, setIsAuthenticate,
            logout,
            fetchCatagory
          }}>
          
           {children}
          </DataContext.Provider>
  
      )
  }
  export default DataContext
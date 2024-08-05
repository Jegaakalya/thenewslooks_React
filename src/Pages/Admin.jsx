import React ,{useEffect, useState} from 'react'
import AdminNavBar from '../components/AdminNavBar/AdminNavBar'
import PostList from './Post/PostList';
import Category from './Category/Category';
import Authou from './Author/Authou';

const Admin = () => {
  const [navigation , setNavigation] = useState([{id : 1 , name: 'Post', current: true },
    {id : 2 ,  name: 'Category',  current: false },
    {id : 3 , name: 'User',   current: false }, ])
 

  const handleNavigation = (item) => { 
      setNavigation(prev => {
          // Clone the previous state to avoid mutating it directly
          const updatedNavigation = [...prev];

          // Find the item to update
          const currentItem = updatedNavigation.find(navItem => navItem.id === item.id);

          if (currentItem) {
              // Update the current item's `current` property
              currentItem.current = true;

              // Update other items to ensure only one item is current
              updatedNavigation.forEach(navItem => {
                  if (navItem.id !== currentItem.id) {
                      navItem.current = false;
                  }
              });
              console.log(updatedNavigation);
              // Return the updated navigation state
              return updatedNavigation;
          }

          // If item is not found, return previous state unchanged
          return prev;
      });
  };

  return (
    < >
       <div>
           <AdminNavBar 
            navigation = {navigation}
            handleNavigation = {handleNavigation}
           />
          
           {navigation?.map(({id, name, current})=>{ 
              if (id === 1 && current) {
                return <PostList key={id} />;
              }
              if (id === 2 && current) {
                return <Category key={id} />;
              }
              if (id === 3 && current) {
                return <Authou key={id} />;
              }
              return null;
           })}
       </div>
    </ >
  )
}

export default Admin

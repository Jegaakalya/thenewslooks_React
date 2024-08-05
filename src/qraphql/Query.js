export const allCategory=(data)=>{ 
    let   mutations = `
     query MyQuery {
  allCategory(${data}) {
    name
    id
    createdBy {
      id
    }
  }
}`
  return mutations
  }


  export const allCustomuser=(data)=>{ 
    let   query = `
     query MyQuery {
    allCustomuser{
      id
      email
      username
      isUser
      isSuperuser
      isStaff
      dateJoined
    }
  }`
  return query
  }

  export const Customuser=(data)=>{ 
    let   query = `
     query MyQuery {
    allCustomuser(${data}){
      id
      email
      username
      isUser
      isSuperuser
      isStaff
      dateJoined
    }
  }`
  return query
  }


  export const allPost=(data)=>{ 
    let   mutations = `
       query MyQuery {
    allPost { 
      id
      title
    }
  }`
  return mutations
  }


  

  
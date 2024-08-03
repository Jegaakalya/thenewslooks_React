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
    let   mutations = `
     query MyQuery {
    allCustomuser {
     id
      email
      username
      isUser
      isSuperuser
      isStaff
      dateJoined
    }
  }`
  return mutations
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


  

  
export const usercreateMutations=(data)=>{
    // email: "kayal1@gmail.com", password: "123456789kishor", username: "kayal1"
    let   mutations = `
     mutation MyMutation {
 rigister(${data}) {
   errors
   success
 }
}`
return mutations
}
 
 
export const loginMutation=(data)=>{
    // email: "jk@gmail.com", password: "123456789"
    let   mutations = `
     mutation MyMutation {
    loginMutation(${data}) {
      errors
      success
      user{
        id
        username 
        isUser
        isReporter
        isadmin
      }
    }
  }`
return mutations
}


export const CategoryMutation=(data)=>{
  // createdBy: 1, id: "", name: "TOP 10", modifieBy: null
  let   mutations = `
   mutation MyMutation {
  categoryCreateMutation(${data}) {
    errors
    success
    categoryType {
      name
      id
    }
  }
}`
return mutations
}

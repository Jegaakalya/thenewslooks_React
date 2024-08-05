import * as  yup from "yup"


export const loginSchema = yup.object().shape({
    email : yup.string().email("in valid Email").required("Email is required") ,
    password : yup.string().required("Password is required")
}) 


export const signUpSchema = yup.object().shape({
    username : yup.string().required("Password is username"),
    email : yup.string().email("in valid Email").required("Email is required") ,
    password : yup.string().required("Password is required"),
    password2: yup.string()
        .required("Please confirm your password")
        .oneOf([yup.ref('password'), null], "Passwords must match")
}) 

export const createUserSchema = yup.object().shape({
    username : yup.string().required("Password is username"),
    email : yup.string().email("in valid Email").required("Email is required") ,
    password : yup.string().required("Password is required"),
    
}) 
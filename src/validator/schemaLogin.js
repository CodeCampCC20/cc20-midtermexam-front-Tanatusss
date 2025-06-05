import * as Yup from "yup";

export const schemaLogin = Yup.object({
  username: Yup.string().max(20).required("Username is required"),
  password: Yup.string().max(20).required("Password us required")  
})

export const schemaRegister = Yup.object({
  username: Yup.string().min(6).max(20).required("Username is required"),
  password: Yup.string().min(6).max(20).required("Password us required"),  
  confirmPassword: Yup.string().min(6).max(20)
    .oneOf([Yup.ref("password"),null],"Password must match")
    .required("confirem Password is required")
})

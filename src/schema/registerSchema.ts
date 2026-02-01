import * as zod  from 'zod'

export let schema=zod.object({
  name:zod.string().nonempty('Name is required')
  .min(3 , 'Name min 3 char').max(5 , 'Name max 5 char') , 


  email: zod.string().nonempty('Email is required')
  .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ , 'Invalid Email') ,


  password:zod.string().nonempty('Password is required')
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ , 'Invalid password') ,


  phone:zod.string().nonempty('Phone is required').regex(/^01[0125][0-9]{8}$/ , 'Invalid Phone') ,



  rePassword:zod.string().nonempty('rePassword is required')
}).refine((data)=> data.password === data.rePassword , {path :['rePassword'] , message:'Invalid rePassword'})



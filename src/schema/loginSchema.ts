import * as zod  from 'zod'

export let loginSchema=zod.object({
 

  email: zod.string().nonempty('Email is required')
  .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ , 'Invalid Email') ,


  password:zod.string().nonempty('Password is required')
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ , 'Invalid password') ,





})


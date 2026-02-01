'use client'
import { Button } from '@/components/ui/button'
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { schema } from '@/schema/registerSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Butterfly_Kids } from 'next/font/google'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as zod  from 'zod'
export default function Register() {
 const form= useForm({
  defaultValues :{
    name:'',
    email:'' ,
    password:'',
    rePassword:'' ,
    phone:''
  } ,
  resolver:zodResolver(schema) ,
  mode:'onBlur'


  })


  function submitForm(values:zod.infer<typeof schema>){

    console.log(values);
    

  }



  return  <>


  <div className="w-1/2 mt-10 rounded-2xl mx-auto p-10 bg-gray-200">
  <h2 className='text-green-600 font-bold text-2xl'>Register Now</h2>
  <form  onSubmit={form.handleSubmit(submitForm)} >

    <div className='mt-4'>
      <Controller
  name="name"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Name :</FieldLabel>
      <Input
      className='bg-white '
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter your Name"
        
      />
  
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

    </div>


      <div className='mt-4'>
      <Controller
  name="email"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Email :</FieldLabel>
      <Input
      className='bg-white '
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter your Email"
        
      />
  
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

    </div>

         <div className='mt-4'>
      <Controller
  name="password"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Password :</FieldLabel>
      <Input
      className='bg-white '
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter your Password"
        
      />
  
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

    </div>


          <div className='mt-4'>
      <Controller
  name="rePassword"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>rePassword :</FieldLabel>
      <Input
      className='bg-white '
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter your rePassword"
        
      />
  
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

    </div>



      <div className='mt-4'>
      <Controller
  name="phone"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Phone :</FieldLabel>
      <Input
      className='bg-white '
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter your Phone"
        
      />
  
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

    </div>


    <Button type='submit' className='my-5 w-full'>Submit</Button>


  </form>
  </div>
  
  
  
  </>
}

'use server'
import { getAccessToken } from "@/schema/access-token"
import { decode } from "next-auth/jwt"
import { cookies } from "next/headers"

export async function updateCartItem({productId , count}:{productId:string , count:number}){
    const token= await getAccessToken()

if(!token){
    throw new Error('Unauthorized...')
}

    const resp= await fetch(`${process.env.API}/cart/${productId}` ,{
      
        method:'PUT' ,
        headers:{
            token:token,
            'Content-type':'application/json'
        } ,
        body:JSON.stringify({
            count:count
        })


 

})
const payload= await resp.json()
console.log(payload)
return payload
}

// server action  Post , put , delete 

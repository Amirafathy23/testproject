'use server'
import { getAccessToken } from "@/schema/access-token"
import { decode } from "next-auth/jwt"
import { cookies } from "next/headers"

export async function addToCart(productId:string){
    const token= await getAccessToken()

if(!token){
    throw new Error('Unauthorized...')
}

    const resp= await fetch(`${process.env.API}/cart` ,{
        cache :'no-store' ,
        method:'POST' ,
        headers:{
            token:token,
            'Content-type':'application/json'
        } ,
        body:JSON.stringify({
            productId
        
    })

 

})
const payload= await resp.json()
console.log(payload)
return payload
}

// server action  Post , put , delete 

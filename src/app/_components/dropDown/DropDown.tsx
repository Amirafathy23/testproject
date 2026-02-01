import userImage from '../../../aassets/images/user.webp'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from "next/link"
function logout(){
  signOut({
    callbackUrl:'/login'
  })
}
export function DropdownMenuBasic() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
       <Image alt='user' width={30} height={30} src={userImage}/>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
         
          <DropdownMenuItem>
            <Link href={'/profile'}>Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className='cursor-pointer' onClick={logout}>Logout</span>
            </DropdownMenuItem>
          
        </DropdownMenuGroup>
     
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

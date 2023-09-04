import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

//userInfo getting from dynamic routing UserId/page
const UserInfo = ({userInfo}) => {

    const{ data: session} = useSession();

    const router = useRouter();
    const handleLogout = () => {
      signOut();
      router.push('/')
    }
  return (
    <div className='flex flex-col items-center'>
        <Image src = {userInfo.userImage} alt = "userInfo-image" width={100} height={100} className='rounded-full'/>
        <h2 className='text-[30px] font-semibold'>{userInfo.userName}</h2>
        <h2 className='text-gray-400'>{userInfo?.email}</h2>
        <div className='flex gap-2'>
        <button className='bg-gray-200 p-2 px-3 font-semibold mt-5 rounded-full'>Share</button>
        {session?.user.email === userInfo.email ?
        (<button onClick={handleLogout} className='bg-gray-200 p-2 px-3 font-semibold mt-5 rounded-full' >Logout</button>)
        : null }
        </div>
    </div>
  )
}

export default UserInfo
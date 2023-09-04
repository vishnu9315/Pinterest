"use client"
import Image from 'next/image'
import React from 'react'
import { HiSearch, HiBell, HiChat } from "react-icons/hi";
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import { useSession, signIn, signOut } from "next-auth/react"
import app from '../shared/firebaseConfig';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


const Header = () => {
  const { data: session } = useSession()
  const router = useRouter();

  const db = getFirestore(app)

  useEffect(() => {
    saveUserInfo();
  }, [session])

  const saveUserInfo = async() => {
    if(session?.user){
      await setDoc(doc(db, "user", session.user.email), {
        userName: session.user.name,
        email: session.user.email,
        userImage: session.user.image
      });
    }
  }
  const onCreateClick=()=>{
    if(session)
    {
      router.push('/pin-builder')
    }
    else{
      signIn();
    }
  }

  return (
    <div className='flex items-center md:gap-2 gap-3 p-6'>
        <Image src = {'/logo.png'} alt = "logo" height={50} width={50} onClick={() => router.push('/')}
        className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'
        />
        <button className='bg-black text-white rounded-full p-2 px-4'>Home</button>
        <button className='rounded-full p-2 px-4 font-semibold'
        onClick={() => onCreateClick()}
        >Create</button>
        <div className='bg-[#e9e9e9] p-3 flex gap-3 items-center rounded-full w-full hidden md:flex'>
            <HiSearch className='text-[25px] text-gray-500 md:hidden'/>
            <input className='bg-transparent outline-none ' type = "text" placeholder='seach..'/>   
        </div>
            <HiBell className='text-[40px] text-gray-500' />
            <HiChat className='text-[40px] text-gray-500'/>
            { session?.user? (<Image src = {session?.user?.image} alt = "logo" height={50} width={50} onClick={() => router.push('/' + session?.user?.email)}
              className='hover:bg-gray-300 p-2 rounded-full cursor-pointer' /> ):
          <button onClick={() => signIn()} className='rounded-full p-2 px-4 font-semibold'>Login</button>}

    </div>
  )
}

export default Header
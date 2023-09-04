"use client"
import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import PinList from './components/Pins/PinList';
import app from './shared/firebaseConfig';

export default function Home() {
  const db=getFirestore(app);
  const [listOfPins,setListOfPins]=useState([]);
  
  useEffect(()=>{
    getAllPins();
  },[])
  const getAllPins=async()=>{
    setListOfPins([])
      const q=query(collection(db,
        'pinterest-post')
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
       
       
      setListOfPins((listOfPins)=>
      [...listOfPins,doc.data()]);
      });
  }

  return (
    <>
    <div className='p-3'>
      <PinList listOfPins={listOfPins} />
      </div>
    </>
  )
}
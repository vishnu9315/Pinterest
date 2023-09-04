"use client"
import { getFirestore } from 'firebase/firestore'
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import app from '../shared/firebaseConfig'
import { useState } from 'react';
import UserInfo from '../components/UserInfo';
import PinList from '../components/pins/PinList';

const Profile = ({params}) => {
    const [userInfo, setUserInfo] = useState()
    const [listOfPins, setListOfPins] = useState([])
   
    const db = getFirestore(app)
   
    useEffect(() => {
        if(params){
            getUserInfo(params.userId.replace("%40", '@'))
        }
    }, [params])
   

    
    

    //calling this method in useEffect and replacing %40 with @ and passing it as the uniue user id 
    const getUserInfo = async (email) => {
        const docRef = doc(db, "user", email);
        const docSnap = await getDoc(docRef);

        //if email exists it will the the data else no such document
        //returning three things username, userimage and useremail
        if (docSnap.exists()) {
            setUserInfo(docSnap.data());
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
    }
    useEffect(() => {
        if (userInfo) {
            getPinLists();
        }
    }, [userInfo])

    const getPinLists = async () => {
        try {
            const q = query(collection(db, 'pinterest-post'), where('email', '==', userInfo.email));
            const querySnapshot = await getDocs(q);
            const docs = querySnapshot.docs.map((doc) => doc.data());
            setListOfPins(docs);
        } catch (error) {
            console.error("Error fetching data from Firestore:", error);
        }
    }
   
   
    

    return (
        <div>
        {userInfo ?
        <div>
             <UserInfo userInfo={userInfo} /> 
             <PinList listOfPins = {listOfPins} /> </div> : null}
        </div>
    )
}
export default Profile
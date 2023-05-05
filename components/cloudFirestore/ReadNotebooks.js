/* eslint-disable react/jsx-key */
import { db } from '@/lib/firebase/initFirebase'
import { query, getDocs, collection, where } from 'firebase/firestore'
import React, { useState } from 'react'

async function ReadNotebooks (user) {
  let notebooks = []
  const readData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, user.id))
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, ' => ', doc.data())
      }
      )
      // create a map from the querySnapshot
      notebooks = (querySnapshot.docs.map(doc => doc.data()))
      console.log(notebooks)
    } catch (error) {
      console.log(error)
    }
  }
  await readData()

  console.log('hello', notebooks)
  return notebooks
}

export default ReadNotebooks

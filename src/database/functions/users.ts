import { db } from '../firebase'
import { setDoc, doc, getDoc, collection, query, where, getDocs, deleteDoc } from 'firebase/firestore'

//interfaces
import { IUser } from '@/utils/interfaces/types'

export const addUser = async (userId: string, userInfo: any) => {
  try {
    await setDoc(doc(db, 'users', userId), userInfo);
  } catch (error) {
    console.error('Error adding user to Firestore: ', error);
    throw new Error('Error adding user to Firestore: ');
  }
};


export const getUser = async (uid: string) => {
    try {
        const docRef = doc(db, 'users', uid)
        const res = await getDoc(docRef)
        return res.data()
    } catch (error) {
        console.log(error)
        return false
    }
}



export const updateUser = async (user: IUser) => {
    try {
        const docRef = doc(db, 'users', user.uid)
        var payload: any = {
            uid: user.mail,
            mail: user.mail,
            name: user.name,
            nickname: user.nickname,
            phone: user.phone,
        }
        await setDoc(docRef, payload)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

export const deleteUser = async (uid: string) => {
    try {
        const docRef = doc(db, 'users', uid)

        await deleteDoc(docRef)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    sendPasswordResetEmail,
    EmailAuthProvider,
    reauthenticateWithCredential,
    updatePassword
} from 'firebase/auth'

import { auth } from '../firebase'

//firebase - user
import { addUser, getUser } from './users'


const login = async (mail:string, password:string) => {
    return signInWithEmailAndPassword(auth, mail, password)
        .then(async (result:any) => {
            console.log(result)
            const item = await getUser(result.user.uid)
            console.log(item)
            return { status: 200, data: item }
        }).catch((error) => {
            var errorMessage = error.message
            console.log(errorMessage)
            if(errorMessage === "Firebase: Error (auth/user-not-found)."){
                errorMessage = "No existe el usuario"
            } else if(errorMessage === "Firebase: Error (auth/invalid-email)."){
                errorMessage = "Formato de email incorrecto"
            } else{
                errorMessage = "Contraseña incorrecta. Favor de ingresarla de nuevo."
            }
            return { status: 400, data: errorMessage }
        })
}


const signup = async (name:string, nickname: string, mail:string, phone: string, password: string) => {
    //check if user exists
    return await createUserWithEmailAndPassword(auth, mail, password).then(async(result) => {
        let tempUser = {
            uid: result.user.uid,
            mail: mail,
            name: name,
            nickname: nickname,
            phone: phone,
            hasPaid: false,
            hasSelected: false,
            copamerica: {
                hasPaid: false,
                hasSelected: false,
            }
        }
        await addUser(result.user.uid, tempUser)
        return { user: tempUser, status: 200 };
    }).catch((error => {
        var errorMessage = error.message
        console.log(errorMessage)
        if(errorMessage === "Firebase: Error (auth/email-already-in-use)."){
            errorMessage = "Ya existe un usuario con este correo."
        } else{
            errorMessage = "Ocurrió un error al dar registrarse. Inténtelo de nuevo."
        }
        return errorMessage
    }))
}

const logout = async() => {
    await signOut(auth)
}

const triggerResetEmail = async(mail:string) => {
    return await sendPasswordResetEmail(auth, mail)
    .then(() => {
        return 'envio_correcto'
    })
    .catch((error) => {
        var errorMessage = error.message
        if (errorMessage === 'Firebase: Error (auth/user-not-found).'){
            return 'Este correo electrónico no está registrado.'
        } else {
            return 'Hubo un problema enviando el correo, intentalo nuevamente.'
        }
    });
}

const reauthenticate = async (currentPassword:string) => {
    var currentUser = auth.currentUser;
    //@ts-ignore
    var cred = EmailAuthProvider.credential(currentUser.email, currentPassword);
    //@ts-ignore
    return await reauthenticateWithCredential(currentUser, cred);
}

const changePassword = async (currentPassword:string, newPassword:string) => {
    return await reauthenticate(currentPassword).then(async() => {
        var currentUser = auth.currentUser;
        //@ts-ignore
        await updatePassword(currentUser, newPassword).then(() => {
            return true
        }).catch((error) => { 
            console.error(error)
            return "Error al actualizar la contraseña."
        ; });
        return true
    }).catch((error) => { 
        console.error(error); 
        return "Contraseña actual incorrecta."
    });
}

export { login, signup, logout, triggerResetEmail, changePassword }
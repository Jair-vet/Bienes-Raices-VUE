import { defineStore } from 'pinia'
import { useFirebaseAuth } from 'vuefire'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const useAuthStore = defineStore('auth', () => {

    const auth = useFirebaseAuth()

    const errorCodes = {
        'auth/invalid-credential': 'Usuario no Encontrado'
    }

    const login = ({email, password}) =>{
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch(error => {
                console.log( errorCodes[error.code] );
            })
    }



    return {
        login
    }
})
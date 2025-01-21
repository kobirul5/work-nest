import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebaes.config";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()
    
    const googleProvider = new GoogleAuthProvider()

    const userCreate = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login
    const userLogin = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    // update
    const updateUserProfile= (name, photo)=>{
        return updateProfile(auth.currentUser, {displayName: name, photoURL: photo})
    }
    // logout
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth)
    }

    // google
    const googleLoginUser = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
                // setLoading(false)
            if(currentUser){
                const userinfo = {email: currentUser.email}
                axiosPublic.post('/jwt', userinfo)
                .then((res)=>{
                    if(res.data.token){
                        setLoading(false)
                        localStorage.setItem("access-token", res.data.token)
                    }
                })

            }
            else{
                //TODO remove token
                setLoading(false)
                localStorage.removeItem("access-token")
            }
       
        })
        
        return ()=>{
            return unsubscribe()
        }
        
    },[])
console.log(loading)
    const authInfo = {
       user,
       loading,
       setLoading,
       userCreate,
       userLogin,
       updateUserProfile,
       logOut,
       googleLoginUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
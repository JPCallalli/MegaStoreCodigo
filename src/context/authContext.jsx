import { createContext, useState, useEffect } from "react";
import { auth } from "../config/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { getStorage, saveStorage } from "../utils/localStorage";

const AuthContext = createContext();

const AuthcontextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // El callback en onAuthStateChanged es una funcion que se ejecuta cuando el estado de autenticacion cambia
        // El control de esta funcion lo tiene firebase, es un evento que se dispara cuando el estado de autenticacion cambia
        onAuthStateChanged(auth, (userInfo) => {
            if(userInfo){
                setUser(userInfo);
                // saveStorage("user", user);
            }else{
                setUser(null);
                // saveStorage("user", null);
            }
        })
    }, []);

    return (<AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>)
    
;}

export { AuthContext, AuthcontextProvider };
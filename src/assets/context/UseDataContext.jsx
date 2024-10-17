import { createContext, useState } from "react";
import { Page2 } from "../../components/Page2";
import { Link } from "react-router-dom";

export const UserContext = createContext();

export const MyProvider = ({children})=>{

 const [user,setUser]= useState();


    return (

        
        <UserContext.Provider value={{user,setUser}}>

            {children}

        </UserContext.Provider>
    )
}
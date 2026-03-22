import React, { createContext, useContext, useState } from 'react'
export const AuthContext = createContext()
export default function Authprovider({ children }) {
    //localstorage se user ko lana 
    const initialAuthUser = localStorage.getItem("Users")
 const [authUser, setAuthUser] = useState(
  initialAuthUser ? JSON.parse(initialAuthUser) : null
);
    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )

}
export const useAuth = () => useContext(AuthContext)


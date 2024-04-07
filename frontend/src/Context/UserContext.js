import React, { createContext, useState } from "react";


export const UserContext = createContext();

export const UserProvider = ({ children} ) => {
    const [profileImageUrl, setProfileImageUrl] = useState("");
    const [email, setEmail] = useState("");

    return(
        <UserContext.Provider value={{email, setEmail, profileImageUrl, setProfileImageUrl}}>
        {children}
        </UserContext.Provider>
    )
}
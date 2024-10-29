// import React, { useState } from "react";

import { createContext } from "react";


// export const UserCredentialContext = React.createContext({});

// const UserCredentialProvider = ({children}) => {

//     const [userData,setUserData] = useState();

//     return(
//         <UserCredentialContext.Provider value={{ userData, setUserData }}>
//             {children}
//         </UserCredentialContext.Provider>
//     )
// }

// export default UserCredentialProvider;

export const UserCredentialContext = createContext();
import React, { useState } from "react";

export const AsideTabContext = React.createContext();

const AsideTabProvider = ({children}) => {
    const [currentTab,setCurrentTab] = useState("friends");
    const [showTab,setShowTab] = useState(true)


    return (
        <AsideTabContext.Provider value={{currentTab, showTab, setCurrentTab, setShowTab}}>
            {children}
        </AsideTabContext.Provider>
    )
}

export default AsideTabProvider;
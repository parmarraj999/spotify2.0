import React from "react";
import { useState } from "react";

export const SearchValueContext = React.createContext("")

const SearchValueProvider = ({ children }) => {

    const [searchValue, setSearchValue] = useState("");

    return (<SearchValueContext.Provider value={{ searchValue, setSearchValue }} >
        {children}
    </SearchValueContext.Provider>)
}

export default SearchValueProvider;
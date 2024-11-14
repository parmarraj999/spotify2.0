import React, { useState } from "react";

export const MyPlaylistDataContext = React.createContext();

const MyPlaylistDataProvider = ({ children }) => {

    const [playlistData, setPlaylistData] = useState([])

    console.log(playlistData);

    return (
        <MyPlaylistDataContext.Provider value={{playlistData,setPlaylistData}}>
            {children}
        </MyPlaylistDataContext.Provider>
    )
}

export default MyPlaylistDataProvider;
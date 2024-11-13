import React, { useState } from "react";


export const PlaylistDataContext = React.createContext();

const PlaylistDataProvider = ({ children }) => {

    const [playlistData, setPlaylistData] = useState([])

    console.log(playlistData);

    return (
        <PlaylistDataContext.Provider value={{playlistData,setPlaylistData}}>
            {children}
        </PlaylistDataContext.Provider>
    )
}

export default PlaylistDataProvider;
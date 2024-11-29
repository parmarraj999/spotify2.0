import React, { useState } from "react";

export const PlayerDataContext = React.createContext();

const PlayerDataProvider = ({children}) => {

    const [songDetail,setSongDetail] = useState([]);
    const [playerData,setPlayerData ] = useState({
        songUrl:"",
        songName:"",
        songId: "",
        artistName:""
    })
    const [playerState,setPlayerState] = useState({
        isPlaying:false,
    })


    return(
        <PlayerDataContext.Provider value={{songDetail,setSongDetail,playerData,setPlayerData, playerState,setPlayerState, playMusic}} >
            {children}
        </PlayerDataContext.Provider>
    )
}

export default PlayerDataProvider
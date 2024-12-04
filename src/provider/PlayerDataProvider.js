import React, { useRef, useState } from "react";

export const PlayerDataContext = React.createContext();

const PlayerDataProvider = ({children}) => {

    const [songDetail,setSongDetail] = useState([]);
    const [playerData,setPlayerData ] = useState({
        songUrl:"",
        songName:"",
        songId: "",
        songImage: "",
        artistName:""
    })
    const [playerState,setPlayerState] = useState({
        isPlaying:false,
    })

    const audioRef = useRef();

    return(
        <PlayerDataContext.Provider value={{songDetail,setSongDetail,playerData,setPlayerData, playerState,setPlayerState, audioRef}} >
            {children}
        </PlayerDataContext.Provider>
    )
}

export default PlayerDataProvider
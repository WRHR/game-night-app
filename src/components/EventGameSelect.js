import React, {useState} from 'react'
import GameSearchBar from './GameSearchBar'
import EventGameSelectItem from './EventGameSelectItem'

export default function EventGameSelect(
    {
        setGame, 
        setSelectGameToggle,
        showGameDetail,
        setShowGameDetail
    }){
    const [searchGames, setSearchGames] = useState([])

    const showSearchResults = () => {
        return searchGames.map(result => {
            return (
                <EventGameSelectItem 
                    key={result.id} 
                    setGame={setGame}
                    setSelectGameToggle={setSelectGameToggle}
                    game={result}
                    showGameDetail={showGameDetail}
                    setShowGameDetail={setShowGameDetail}
                />     
            )
        })
    }

    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <GameSearchBar setSearchResults={setSearchGames}/>
            <ul style={{height:'345px', width:'300px', overflowY:'auto'}}>
                {showSearchResults()}
            </ul>
        </div>
    )
}
import React, {useState} from 'react'
import GameSearchBar from './GameSearchBar'
import EventGameSelectItem from './EventGameSelectItem'

export default function EventGameSelect(
    {
        setGame, 
        setSelectGameToggle,
        showGameDetail,
        setShowGameDetail,
        gameLibrary
    }){
    const [searchGames, setSearchGames] = useState(gameLibrary)

    const showSearchResults = () => {
        return searchGames.map(game => {
            return (
                <EventGameSelectItem 
                    key={game.id} 
                    setGame={setGame}
                    setSelectGameToggle={setSelectGameToggle}
                    game={game}
                    showGameDetail={showGameDetail}
                    setShowGameDetail={setShowGameDetail}
                    gameLibrary={gameLibrary}
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
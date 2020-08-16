import React, {useState} from 'react'
import GameSearchBar from './GameSearchBar'
import EventGameSelectItem from './EventGameSelectItem'
export default function EventGameSelect({setGame, setSelectGameToggle}){
    const [searchGames, setSearchGames] = useState([])

    const showSearchResults = () => {
        return searchGames.map(result => {
            return (
                <EventGameSelectItem 
                    key={result.id} 
                    setGame={setGame}
                    setSelectGameToggle={setSelectGameToggle}
                    game={result}
                />     
            )
        })
    }

    return(
        <div>
            <GameSearchBar setSearchResults={setSearchGames}/>
            <ul>
                {showSearchResults()}
            </ul>
        </div>
    )
}
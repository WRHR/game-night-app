import React, {useState} from 'react'
import GameSearchBar from './GameSearchBar'

export default function EventGameSelect({setGame, setSelectGameToggle}){
    const [searchGames, setSearchGames] = useState([])

    const handleClick = (e, result) => {
        e.stopPropagation()
        setGame({
            id:result.id,
            title: result.name,
            background_url: result.background_image
        })
        setSelectGameToggle(false)
    }

    const showSearchResults = () => {
        return searchGames.map(result => {
        return <li key={result.id} onClick={(e)=> handleClick(e, result)}>{result.name}</li>
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
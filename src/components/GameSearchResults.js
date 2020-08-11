import React from 'react'
import GameCard from './GameCard'
import {GamesContainer} from '../Styled/GameStyles'

export default function GameSearchResults({searchResults, setSearchResults}){

    let displayGames= (games) => {
        return games.map(game => {
            return <GameCard game={game} />
        })
    }

    return(
        <div>
            <button onClick={(e)=> setSearchResults(null)}>Back to Game Library</button>
            <h1>Search Results</h1>
            <GamesContainer>
                {displayGames(searchResults)}
            </GamesContainer>
        </div>
    )
}
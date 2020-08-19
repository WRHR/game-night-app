import React, {useState} from 'react'
import GameSearchBar from './GameSearchBar'
import EventGameSelectItem from './EventGameSelectItem'
import {FormTitle, GameSelectContainer} from '../Styled/FormStyles'

export default function EventGameSelect(
    {
        setGame, 
        setSelectGameToggle,
        showGameDetail,
        setShowGameDetail,
        gameLibrary
    }){
    const [searchGames, setSearchGames] = useState([])

    const showSearchResults = () => {
        let gameList = searchGames.length === 0 ? gameLibrary : searchGames 

        return gameList.map(game => {
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
        <GameSelectContainer>
            <GameSearchBar setSearchResults={setSearchGames}/>
            <div>
                {searchGames.length === 0 ? <FormTitle>Your Game Collection</FormTitle> : <FormTitle>Search Results</FormTitle>}
                <ul style={{height:'345px', width:'300px', overflowY:'auto'}}>
                    {showSearchResults()}
                </ul>
            </div>
        </GameSelectContainer>
    )
}
import React, {useState} from 'react'
import {Page} from '../Styled/PageStyles'
import GamesSearchBar from './GameSearchBar'
import GameSearchResults from './GameSearchResults'
import GameLibrary from './GameLibrary'

export default function Games(props) {
    const [searchResults, setSearchResults] = useState(null)
    return (
        <Page>
            <GamesSearchBar setSearchResults={setSearchResults}/>
            {searchResults 
                ? <GameSearchResults 
                    searchResults={searchResults} 
                    setSearchResults={setSearchResults}
                /> 
                : <GameLibrary/>}
        </Page>
    )
}
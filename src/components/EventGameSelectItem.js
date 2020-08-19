import React, {useState} from 'react'
import {FormButton, FormLi} from '../Styled/FormStyles'
import {gamesUrl} from '../helpers/fetchHelpers'
import {CheckRounded} from '@material-ui/icons'

export default function EventGameSelectItem(
    {
        game, 
        setGame, 
        setSelectGameToggle,
        setShowGameDetail,
        gameLibrary
    }){
    const [hovered, setHovered] = useState(false)
    const [inLibrary,setInLibrary] = useState(false)

    let gameInfo = {
        id:game.id,
        name: game.name,
        background_url: game.background_image
    }

    const handleAddGameToEvent= (e) => {
        e.stopPropagation()
        setGame(gameInfo)
        setSelectGameToggle(false)
    }
    
    const handleAddGameToLibrary= (e) => {
        e.stopPropagation()
        
        fetch(gamesUrl,{
            method:'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(gameInfo)
        })
        .then(res=> res.json())
        .then(setInLibrary(true))
        
    }


    const handleMouseEnter =() => {
        setHovered(!hovered)
    }

    const checkLibrary =(game) => {
        let gameIds = gameLibrary.map(game => game.id)
        return gameIds.includes(game.id)
    }

    return(
        <FormLi onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter}>
            <p onClick={(e)=>{setShowGameDetail(game)}}>{game.name}</p>
            <div>
                {hovered && !checkLibrary(game) 
                    ?
                    <FormButton 
                        onClick={handleAddGameToLibrary} 
                        disabled={inLibrary}
                        style={inLibrary? {backgroundColor:'green'}:null}
                        >
                            {inLibrary ? 'Added to Games' : 'Add to Games'}
                    </FormButton> 
                    :null}
                {hovered ? <FormButton onClick={handleAddGameToEvent}>Add to Event</FormButton> :null}
            </div>
        </FormLi>
    )
}
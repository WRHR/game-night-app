import React, {useState} from 'react'
import {FormButton, FormLi} from '../Styled/FormStyles'
import {gamesUrl} from '../helpers/fetchHelpers'

export default function EventGameSelectItem(
    {
        game, 
        setGame, 
        setSelectGameToggle,
        showGameDetail,
        setShowGameDetail
    }){
    const [hovered, setHovered] = useState(false)

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
        .then(console.log)
    }


    const handleMouseEnter =() => {
        setHovered(!hovered)
    }

    return(
        <FormLi onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter}>
            <p onClick={(e)=>{setShowGameDetail(game)}}>{game.name}</p>
            <div>
                {hovered ? <FormButton onClick={handleAddGameToLibrary}>Add to Games</FormButton> :null}
                {hovered ? <FormButton onClick={handleAddGameToEvent}>Add to Event</FormButton> :null}
            </div>
        </FormLi>
    )
}
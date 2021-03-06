import React, {useState} from 'react'
import {FormButton, FormLi} from '../Styled/FormStyles'
import {gamesUrl} from '../helpers/fetchHelpers'
import {CheckRounded, InfoRounded} from '@material-ui/icons'

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
    let gameImage = game.background_image ?  game.background_image : game.background_url
    let gameInfo = {
        id:game.id,
        name: game.name,
        background_url: gameImage
    }

    const handleAddGameToEvent= (e) => {
        e.stopPropagation()
        setGame(gameInfo)
        // setSelectGameToggle(false)
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
            <p style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                {game.name}
                {hovered && <InfoRounded style={{cursor:'pointer'}} onClick={(e)=>{setShowGameDetail(game)}}/>}
            </p>
            <div style={{display:'flex', justifyContent:'center'}}>
                {hovered && !checkLibrary(game) 
                    ?
                    <FormButton 
                        onClick={handleAddGameToLibrary} 
                        disabled={inLibrary}
                        style={inLibrary? {transition:'all 0.2s',backgroundColor:'green'}:null}
                        >
                            {inLibrary ? 'Game Added' : 'Add to Games'}
                    </FormButton> 
                    :null}
                {hovered ? <FormButton onClick={handleAddGameToEvent}>Add to Event</FormButton> :null}
            </div>
        </FormLi>
    )
}
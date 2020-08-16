import React, {useState} from 'react'

export default function EventGameSelectItem({game, setGame, setSelectGameToggle}){
    const [hovered, setHovered] = useState(false)

    const handleAddGameToEvent= (e, result) => {
        e.stopPropagation()
        setGame({
            id:result.id,
            title: result.name,
            background_url: result.background_image
        })
        setSelectGameToggle(false)
    }
    const handleAddGameToLibrary= (e, game) => {
        e.stopPropagation()
        setGame({
            id:game.id,
            name: game.name,
            background_url: game.background_image
        })
        
    }


    const handleMouseEnter =() => {
        setHovered(!hovered)
    }

    return(
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter}>
            {game.name}
            {hovered ? <button>Add to Library</button> :null}
            {hovered ? <button>Add to Event</button> :null}
        </li>
    )
}
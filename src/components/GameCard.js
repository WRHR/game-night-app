import React from 'react'
import {GameImage,GameTitleOverlay} from '../Styled/GameStyles'
export default function GameCard({game}){
    return (
        <GameImage src={game.background_image} style={{width:'15%', margin:'10px'}}>
            <GameTitleOverlay>{game.name}</GameTitleOverlay>
            {/*  platforms*/}
            
        </GameImage>
    )
}
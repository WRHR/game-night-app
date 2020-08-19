import React, {useState, useEffect} from 'react'
import {GameDetailContainer, GameDetailImage, GameDescription} from '../Styled/GameStyles'
import {CloseButton} from '../Styled/FormStyles'
export default function GameDetail({game, setShowGameDetail}){
    const [gameDetails, setGameDetails] = useState({})
    
    const getGameDetails = () => {
        fetch(`https://api.rawg.io/api/games/${game.id}`)
        .then(res => res.json())
        .then(result => setGameDetails(result))
    }

    useEffect( getGameDetails,[])

    return(
        <GameDetailContainer>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
                <h1 style={{ fontSize: '30px',padding:'10px 0', marginLeft:'50%', transform:'translate(-50%,0%)'}}>{gameDetails.name}</h1>
                <CloseButton onClick={(e)=> setShowGameDetail(null)} >X</CloseButton>
            </div>
            <GameDetailImage src={gameDetails.background_image}>
                
            </GameDetailImage>
             
            
            <GameDescription>
                Description: <br></br>
                {gameDetails.description_raw}
            </GameDescription>
            {/* 
            rating    
            website */}
            

        </GameDetailContainer>
    )
}
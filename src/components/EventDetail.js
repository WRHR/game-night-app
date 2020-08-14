import React from 'react'
import {DateContainer, Date} from '../Styled/DayStyles'
import { Title, InfoBox, Detail} from '../Styled/EventStyles'
import { GameImage, GameTitleOverlay } from '../Styled/GameStyles'
import {formatEventDate} from '../helpers/dateFormatting'

export default function EventDetail(
    {
        selectedEvent,
        setSelectedEvent, 
        setSelectedDay,
        showGameDetail,
        setShowGameDetail
    }){

    let {day, time} = formatEventDate(selectedEvent)

    const selectDay = () => {
        let day = selectedEvent.start.split('T')[0]
        setSelectedDay(day)
        setSelectedEvent(null)
    }
    return(
        <DateContainer>
            <Date onClick={selectDay}>{day}</Date>
            <Title>{selectedEvent.title}</Title>
            <GameImage onClick={(e)=>{setShowGameDetail(selectedEvent.game)}} src={selectedEvent.game.background_url}>
                <GameTitleOverlay>{selectedEvent.game.title}</GameTitleOverlay>
            </GameImage>
            <InfoBox>
                <h2>Starts at:</h2>
                <Detail>{time}</Detail>
                <h2>Details:</h2>
                <Detail>{selectedEvent.description}</Detail>
            </InfoBox>
        </DateContainer>
    )
}
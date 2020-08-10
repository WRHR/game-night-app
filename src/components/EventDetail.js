import React from 'react'
import {DateContainer, Date} from '../Styled/DayStyles'
import { Title, InfoBox, Detail} from '../Styled/EventStyles'
import { GameImage, GameTitleOverlay } from '../Styled/GameStyles'
import {formatEventDate} from '../hooks/dateFormatting'

export default function EventDetail({selectedEvent,setSelectedEvent, setSelectedDay}){

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
            <GameImage src={selectedEvent.game.image_url}>
            <GameTitleOverlay>{selectedEvent.game.title}</GameTitleOverlay>
            </GameImage>
            <InfoBox>
            <Detail>Group up at: {time}</Detail>
                <Detail>{selectedEvent.description}</Detail>
            </InfoBox>
        </DateContainer>
    )
}
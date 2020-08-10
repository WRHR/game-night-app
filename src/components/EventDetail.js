import React from 'react'
import {DateContainer, Date} from '../Styled/DayDetail'
import { Title, InfoBox, Detail} from '../Styled/EventDetail'
import {formatEventDate} from '../hooks/dateFormatting'

export default function EventDetail({selectedEvent}){

    let {day, time} = formatEventDate(selectedEvent)

    return(
        <DateContainer>
            <Date>{day}</Date>
            <Title>{selectedEvent.title}</Title>
            <div>Game info here</div>
            <InfoBox>
            <Detail>Starts at: {time}</Detail>
                <Detail>{selectedEvent.description}</Detail>
            </InfoBox>
        </DateContainer>
    )
}
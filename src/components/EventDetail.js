import React from 'react'
import {DateContainer, Date} from '../Styled/DayStyles'
import { Title, InfoBox, Detail} from '../Styled/EventStyles'
import {formatEventDate} from '../hooks/dateFormatting'

export default function EventDetail({selectedEvent, setSelectedDay}){

    let {day, time} = formatEventDate(selectedEvent)

    const selectDay = () => {
        
    }
    return(
        <DateContainer>
            <Date onClick={selectDay}>{day}</Date>
            <Title>{selectedEvent.title}</Title>
            <div>Game info here</div>
            <InfoBox>
            <Detail>Group up at: {time}</Detail>
                <Detail>{selectedEvent.description}</Detail>
            </InfoBox>
        </DateContainer>
    )
}
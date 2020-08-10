import React from 'react'
import {DateContainer, Date} from '../Styled/DayStyles'
import { Title, InfoBox, Detail} from '../Styled/EventStyles'
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
            <div>Game info here</div>
            <InfoBox>
            <Detail>Group up at: {time}</Detail>
                <Detail>{selectedEvent.description}</Detail>
            </InfoBox>
        </DateContainer>
    )
}
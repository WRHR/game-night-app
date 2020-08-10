import React from 'react'
import {DateContainer, Date} from '../Styled/DayStyles'
import {formatDay} from '../hooks/dateFormatting'
import EventThumbnail from './EventThumbnail'
export default function DayDetail({selectedDay, filteredEvents}){

    let day = formatDay(selectedDay)

    const displayEvents = () => {
        return filteredEvents.map(event => {
            return <EventThumbnail key={event.id} event={event} />
        })
    }

    return(
        <DateContainer>
            <Date>{day}</Date>
            {filteredEvents.length > 0 ? displayEvents() : <p>You have no events scheduled for today</p>}
            <button>Add a new event</button>
        </DateContainer>
    )
}
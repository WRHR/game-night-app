import React, {useState} from 'react'
import {DateContainer, Date} from '../Styled/DayStyles'
import {formatDay} from '../hooks/dateFormatting'
import EventThumbnail from './EventThumbnail'


export default function DayDetail({selectedDay, filteredEvents, setSelectedEvent, setShowEventForm}){

    let day = formatDay(selectedDay)

    const displayEvents = () => {
        return filteredEvents.map(event => {
            return <EventThumbnail key={event.id} event={event} setSelectedEvent={setSelectedEvent} />
        })
    }

    return(
        <DateContainer>
            <Date>{day}</Date>
            {filteredEvents.length > 0 ? displayEvents() : <p>You have no events scheduled</p>}
            <button onClick={(e)=> setShowEventForm(true)}>Add an event</button>            
        </DateContainer>
    )
}
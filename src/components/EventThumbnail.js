import React from 'react'
import { ThumbnailContainer } from '../Styled/EventStyles'
import { formatEventDate } from '../hooks/dateFormatting'
export default function EventThumbnail({event, setSelectedEvent}){
    let {day, time} = formatEventDate(event)

    const setEvent = () => {
        setSelectedEvent(event)
    }

    return(
        <ThumbnailContainer onClick={setEvent}>
            <h1>{event.title}</h1>
            <p>{time}</p>
        </ThumbnailContainer>
    )
}
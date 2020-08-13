import React from 'react'
import { ThumbnailContainer } from '../Styled/EventStyles'
import { formatEventDate } from '../helpers/dateFormatting'
export default function EventThumbnail({event, setSelectedEvent}){
    let {day, time} = formatEventDate(event)

    const setEvent = () => {
        setSelectedEvent(event)
    }

    return(
        <ThumbnailContainer src={event.game.background_url} onClick={setEvent}>
            <h1>{event.title}</h1>
            <h1>{time}</h1>
        </ThumbnailContainer>
    )
}
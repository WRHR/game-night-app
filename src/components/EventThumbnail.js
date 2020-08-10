import React from 'react'
import { ThumbnailContainer } from '../Styled/EventStyles'
import { formatEventDate } from '../hooks/dateFormatting'
export default function EventThumbnail({event}){
    let {day, time} = formatEventDate(event)
    return(
        <ThumbnailContainer>
            <h1>{event.title}</h1>
            <p>{time}</p>
        </ThumbnailContainer>
    )
}
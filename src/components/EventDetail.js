import React from 'react'

export default function EventDetail({selectedEvent}){
    return(
        <div>
            <h1>{selectedEvent.title}</h1>
            <p>{selectedEvent.description}</p>
        </div>
    )
}
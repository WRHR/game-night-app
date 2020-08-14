import React from 'react'
import FullCalender from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default function EventCalender(
    {
        myEvents, 
        setSelectedEvent, 
        setSelectedDay, 
    })
    {
 
    const dayInfo = (info) => {
        setSelectedEvent(null)
        setSelectedDay(info.dateStr)
    }
    
    const eventInfo= (info) => {
        let pickedEvent = myEvents.filter(event => event._id === info.event._def.extendedProps._id)[0]
        setSelectedEvent(pickedEvent)
    }

    return(
        
        <FullCalender 
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        events={myEvents}
        headerToolbar={{
            left:'prev,next today', 
            center: 'title',
            right:'dayGridMonth,dayGridWeek'
        }}
        dateClick={dayInfo}
        eventClick={eventInfo}
        dayMaxEvents={true}
        handleWindowResize={true}
        // editable={true}
    />
    )
}

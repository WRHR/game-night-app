import React from 'react'
import FullCalender from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default function EventCalender({myEvents, selectedEvent, setSelectedEvent}){
    const customButtons = {
        testButton: {
            text:'+',
            click: ()=> alert('Clicked test')
        }
    }
    
    const dayInfo = (info) => {
        console.log(info)
    
    }
    
    const eventInfo= (info) => {
        let pickedEvent = myEvents.filter(event => event.id === info.event._def.publicId)[0]
        setSelectedEvent(pickedEvent)
    }

    return(
        
        <FullCalender 
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        events={myEvents}
        customButtons={customButtons}
        headerToolbar={{
            left:'prev,next today', 
            center: 'title',
            right:'dayGridMonth,dayGridWeek'
        }}
        dateClick={dayInfo}
        eventClick={eventInfo}
        handleWindowResize={true}
    />
    )
}

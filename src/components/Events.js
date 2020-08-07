import React, {useState, useEffect} from 'react'
import FullCalender from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

const eventList = [
    {id:1, title: 'Borderlands!', start:'2020-08-07', end:'2020-08-07'},
    {id:1, title: 'Borderlands!', start:'2020-08-09', end:'2020-08-09'},
    {id:2, title: 'Pro League Practice', start:'2020-08-11', end:'2020-08-11'},
    {id:3, title: 'Smash Fun Times', start:'2020-08-12', end:'2020-08-12'},
    {
        id:4, 
        title: 'Diablo 3 Ladder Climb', 
        start:'2020-08-20T12:30:00', 
        end:'2020-08-24', },
]

export default function Events (props){
    const [myEvents, setMyEvents] = useState([])

    useEffect(()=>{
        setMyEvents(eventList)
    },[])
    //Fetch Call to get events 

    return(
        <div className='page'>
            <h1>Look at this</h1>
            <FullCalender 
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView='dayGridMonth'
                events={myEvents}
                customButtons={customButtons}
                headerToolbar={{
                    left:'prev,next today', 
                    center: 'title',
                    right:'dayGridMonth,dayGridWeek testButton'
                }}
                dateClick={dayInfo}
                eventClick={eventInfo}
                handleWindowResize={true}
            />

        </div>
    )
}

const customButtons = {
    testButton: {
        text:'Test',
        click: ()=> alert('Clicked test')
    }
}

const dayInfo = (info) => {
    alert('Clicked on: ' + info.dateStr);

}

const eventInfo= (info) => {
    alert('Event: ' + info.event.title)
    console.log(info.event)
    
}
import React, {useState, useEffect} from 'react'
import EventCalender from './EventCalender'
import EventDetail from './EventDetail'

const eventList = [
    {id:'99', title: 'Borderlands!', start:'2020-08-07T08:30', end:'2020-08-07', description: 'Gonna play some borderlands!'},
    {id:'1', title: 'Borderlands!', start:'2020-08-09T14:30', end:'2020-08-09', description: 'Playing borderlands again. Gonna play some borderlands! Playing borderlands again. Gonna play some borderlands!Playing borderlands again. Gonna play some borderlands!Playing borderlands again. Gonna play some borderlands!Playing borderlands again. Gonna play some borderlands!'},
    {id:'2', title: 'Pro League Practice', start:'2020-08-11T19:50', end:'2020-08-11'},
    {id:'5', title: 'Something', start:'2020-08-12T17:30', end:'2020-08-12'},
    {id:'6', title: 'Test', start:'2020-08-12T14:30', end:'2020-08-12'},
    {id:'3', title: 'Smash Fun Times', start:'2020-08-12T18:30', end:'2020-08-12'},
    {
        id:'4', 
        title: 'Diablo 3 Ladder Climb',
        description: 'Fightin some demons, gonna climb the ranked ladder!', 
        start:'2020-08-20T12:30', 
        end:'2020-08-20', 
    },
]

export default function Events (props){
    const [myEvents, setMyEvents] = useState([])
    const [selectedEvent, setSelectedEvent] = useState(null)

    useEffect(()=>{
        setMyEvents(eventList)
    },[])
    //Fetch Call to get events 

    return(
        <div className='page'>
            <div className='event-container'>
                <EventCalender 
                    myEvents={myEvents} 
                    selectedEvent={selectedEvent}
                    setSelectedEvent={setSelectedEvent}
                />
                {selectedEvent ? <EventDetail selectedEvent={selectedEvent} /> : null}
            </div>

        </div>
    )
}


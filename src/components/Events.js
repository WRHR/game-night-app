import React, {useState, useEffect} from 'react'
import {Page} from '../Styled/PageStyles'
import EventCalender from './EventCalender'
import EventDetail from './EventDetail'
import DayDetail from './DayDetail'
import {getToday} from '../hooks/dateFormatting'

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
    const [selectedDay, setSelectedDay] = useState(getToday())

    useEffect(()=>{
        setMyEvents(eventList)
    },[])


    let filteredEvents = myEvents
        .filter(event => event.start.includes(selectedDay))
    
    filteredEvents.sort((a,b)=> Date.parse(a.start) - Date.parse(b.start))

    return(
        <Page>
            <div className='event-container'>
                <EventCalender 
                    myEvents={myEvents} 
                    setSelectedEvent={setSelectedEvent}
                    setSelectedDay={setSelectedDay}
                />
                {selectedEvent 
                    ? <EventDetail 
                        selectedEvent={selectedEvent} 
                        setSelectedEvent={setSelectedEvent}
                        setSelectedDay={setSelectedDay}
                    /> 
                    : <DayDetail 
                        selectedDay={selectedDay} 
                        filteredEvents={filteredEvents}
                        setSelectedEvent={setSelectedEvent}
                    />
                }
            </div>
        </Page>
    )
}


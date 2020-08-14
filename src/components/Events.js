import React, {useState} from 'react'
import {Page} from '../Styled/PageStyles'
import EventCalender from './EventCalender'
import EventDetail from './EventDetail'
import DayDetail from './DayDetail'
import EventForm from './EventForm'
import {getToday} from '../helpers/dateFormatting'

export default function Events(
    {
        myEvents, 
        setMyEvents, 
        showGameDetail, 
        setShowGameDetail
    }){
    
    const [selectedEvent, setSelectedEvent] = useState(null)
    const [selectedDay, setSelectedDay] = useState(getToday())
    const [showEventForm, setShowEventForm] = useState(false)

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
                        showGameDetail={showGameDetail}
                        setShowGameDetail={setShowGameDetail}
                    /> 
                    : <DayDetail 
                        selectedDay={selectedDay} 
                        filteredEvents={filteredEvents}
                        setSelectedEvent={setSelectedEvent}
                        setShowEventForm={setShowEventForm}
                    />
                }
            </div>
                {showEventForm 
                    ? <EventForm 
                        selectedDay={selectedDay} 
                        setShowEventForm={setShowEventForm} 
                        myEvents={myEvents}
                        setMyEvents={setMyEvents}
                    /> 
                    : null
                }
        </Page>
    )
}


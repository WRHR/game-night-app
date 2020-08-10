import React, {useState} from 'react'
import {EventFormContainer, Form, FormTitleContainer, FormTitle, CloseButton} from '../Styled/FormStyles'

export default function EventForm({selectedDay, setShowEventForm, myEvents, setMyEvents}){
    const [title, setTitle] = useState('')
    const [eventDate, setEventDate] = useState(selectedDay)
    const [startTime, setStartTime] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit =(e) => {
        e.preventDefault()
        let event = {
            id: 25,
            title,
            start: `${eventDate}T${startTime}`,
            description
        }
        setMyEvents([...myEvents, event])
    }

    return(
        <EventFormContainer>
            <FormTitleContainer>
                <FormTitle>New Event</FormTitle> 
                <CloseButton onClick={(e)=> setShowEventForm(false)}>X</CloseButton>
            </FormTitleContainer>
            <Form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type='text' name='title' value={title} onChange={(e)=>setTitle(e.target.value)}/> 
                <label>Day:</label>
                <input type='date' name='date' value={eventDate} onChange={(e)=> setEventDate(e.target.value)}/>
                <label>Start Time:</label>
                <input type='time' name='startTime' value={startTime} onChange={(e)=> setStartTime(e.target.value)} />
                <label>Details:</label>
                <textarea 
                    name='description' 
                    value={description} 
                    onChange={(e)=> setDescription(e.target.value)} 
                    rows="7" 
                    cols="40"
                />
                <button>Add Event</button>
            </Form>
        </EventFormContainer>
    )
}
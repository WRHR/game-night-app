import React, {useState} from 'react'
import {EventFormContainer, Form, FormTitleContainer, FormTitle, CloseButton} from '../Styled/FormStyles'
import EventGameSelect from './EventGameSelect'


export default function EventForm({selectedDay, setShowEventForm, myEvents, setMyEvents}){
    const [title, setTitle] = useState('')
    const [eventDate, setEventDate] = useState(selectedDay)
    const [startTime, setStartTime] = useState('')
    const [description, setDescription] = useState('')
    const [selectGameToggle, setSelectGameToggle] = useState(false)
    const [game, setGame] = useState(null)

    const handleSubmit =(e) => {
        e.preventDefault()
        let event = {
            id: 25,
            title,
            start: `${eventDate}T${startTime}`,
            description,
            game
        }
        setMyEvents([...myEvents, event])
        
    }

    const handleClick= (e) => {
        e.stopPropagation()
    }

    const handelSelectGame = (e) => {
        e.stopPropagation()
        e.preventDefault()
        setSelectGameToggle(!selectGameToggle)
    }


    return(
        <EventFormContainer>
            <FormTitleContainer>
                <FormTitle>New Event</FormTitle> 
                <CloseButton onClick={(e)=> setShowEventForm(false)}>X</CloseButton>
            </FormTitleContainer>
            <div style={{display:'flex'}}>
                <Form onSubmit={handleSubmit}>
                    {game ? <h2>Game:{game.title}</h2> :null}
                    <button onClick={handelSelectGame}>Select a Game</button>
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
                    <button type='submit' onClick={handleClick}>Add Game Night</button>
                </Form>
                {selectGameToggle 
                    ? <EventGameSelect 
                        setGame={setGame} 
                        setSelectGameToggle={setSelectGameToggle} 
                    /> 
                    : null}
            </div>
        </EventFormContainer>
    )
}
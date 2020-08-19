import React, {useState} from 'react'
import {EventFormContainer, Form, FormTitleContainer, FormTitle, CloseButton, FormButton} from '../Styled/FormStyles'
import EventGameSelect from './EventGameSelect'
import {eventsUrl} from '../helpers/fetchHelpers'
import EventAttendeeSelect from './EventAttendeeSelect'


export default function EventForm(
    {
        selectedDay, 
        setShowEventForm, 
        myEvents, 
        setMyEvents,
        showGameDetail,
        setShowGameDetail,
        userId,
        gameLibrary
    }){

    const [title, setTitle] = useState('')
    const [eventDate, setEventDate] = useState(selectedDay)
    const [startTime, setStartTime] = useState('')
    const [description, setDescription] = useState('')
    const [selectGameToggle, setSelectGameToggle] = useState(false)
    const [game, setGame] = useState(null)
    const [attendeesToggle, setAttendeesToggle] = useState(false)
    const [attendees, setAttendees] = useState([])

    const handleSubmit =(e) => {
        e.preventDefault()
        let event = {
            title,
            start: `${eventDate}T${startTime}`,
            description,
            game,
            attendees
        }
        setMyEvents([...myEvents, event])

        fetch(eventsUrl, {
            method:'POST',
            headers:{
                'Authorization': `Bearer ${localStorage.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        })
        .then(res => res.json())

        setShowEventForm(false)
    }

    const handleClick= (e) => {
        e.stopPropagation()
    }

    const handelSelectGame = (e) => {
        e.stopPropagation()
        e.preventDefault()
        setSelectGameToggle(!selectGameToggle)
    }
    const handelInvite = (e) => {
        e.stopPropagation()
        e.preventDefault()
        setAttendeesToggle(!attendeesToggle)
    }

    const checkGame = (game) => {
        return game ? false : true
    }

    const checkForm = () => {
        if(title && startTime && description && game) {
            return false
        }
        return true
    }

    return(
        <EventFormContainer>
            <FormTitleContainer>
                <FormTitle>New Game Night</FormTitle> 
                <CloseButton onClick={(e)=> setShowEventForm(false)}>X</CloseButton>
            </FormTitleContainer>
            <div style={{display:'flex',}}>
                <Form onSubmit={handleSubmit}>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <FormButton onClick={handelSelectGame}>Select a Game</FormButton> 
                        {game ? <h2 style={{margin:'5px 0'}}>{game.name}</h2> :null}
                    </div>
                    <FormButton disabled={checkGame(game)} onClick={handelInvite}>Invite Friends</FormButton>
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
                    <button disabled={checkForm()} type='submit' onClick={handleClick}>Add Game Night</button>
                </Form>
                {selectGameToggle 
                    ? <EventGameSelect 
                        setGame={setGame} 
                        setSelectGameToggle={setSelectGameToggle}
                        showGameDetail={showGameDetail}
                        setShowGameDetail={setShowGameDetail} 
                        gameLibrary={gameLibrary}
                    /> 
                    : null
                }
                {attendeesToggle 
                    ? <EventAttendeeSelect 
                        userId={userId}
                        game={game}
                        attendees={attendees}
                        setAttendees={setAttendees}
                    />  
                    :null
                }
            </div>
        </EventFormContainer>
    )
}
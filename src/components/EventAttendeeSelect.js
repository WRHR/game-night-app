import React, {useState, useEffect} from 'react'
import {usersUrl} from '../helpers/fetchHelpers'
import {SportsEsportsRounded, CheckRounded} from '@material-ui/icons'
import {FormLi} from '../Styled/FormStyles'

export default function EventAttendeeSelect({userId, game, attendees, setAttendees}){
    const [userList, setUserList] = useState([])

    const getUserList = () => {
        fetch(usersUrl)
        .then(res => res.json())
        .then(result => setUserList(result.users))
    }
    
    const addGuest = (e, user) =>{
        e.stopPropagation()
        if(attendees.includes(user._id)){
            setAttendees(attendees.filter(attendee => attendee !== user._id))
        } else{
            setAttendees([...attendees, user._id])
        } 
    }

    useEffect(getUserList, [])

    const createUserList = () => {
        let filteredUserList = userList.filter(user => user._id !== userId)
        return filteredUserList.map(user => {
            let userGameLibrary = user.gameLibrary.map(game => {
                return game.id
            })
            return (
                userGameLibrary.includes(game.id)
                    ? 
                        <FormLi 
                            onClick={(e)=> addGuest(e, user)} 
                            key={user._id}
                        >
                            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                <div>
                                    {attendees.includes(user._id)? <CheckRounded style={{fontSize:'1rem'}}/> : null}
                                    {user.name} 
                                </div>
                                <SportsEsportsRounded style={{fontSize:'1rem'}}/>
                            </div> 
                        </FormLi>
                    : 
                        <FormLi 
                            onClick={(e)=> addGuest(e, user)} 
                            key={user._id}
                        >
                            <div>
                                {attendees.includes(user._id)? <CheckRounded style={{fontSize:'1rem'}}/> : null}
                                {user.name}
                            </div>
                        </FormLi>
            )
        })
    }

    return (
        <div style={{width:'180px', color:'white', paddingRight:'10px'}}>
            <h1>Friend List:</h1>
            <ul>
                {createUserList()}
            </ul>
        </div>
    )
}
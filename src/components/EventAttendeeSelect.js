import React, {useState, useEffect} from 'react'
import {usersUrl} from '../helpers/fetchHelpers'
import {SportsEsportsRounded} from '@material-ui/icons'

export default function EventAttendeeSelect({userId, game, attendees, setAttendees}){
    const [userList, setUserList] = useState([])

    const getUserList = () => {
        fetch(usersUrl)
        .then(res => res.json())
        .then(result => setUserList(result.users))
    }
    
    const addGuest = (e, user) =>{
        e.stopPropagation()
        setAttendees([...attendees, user._id])
        
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
                    ? <li onClick={(e)=> addGuest(e, user)} key={user._id}>{user.name} <SportsEsportsRounded style={{fontSize:'1rem'}}/></li>
                    : <li onClick={(e)=> addGuest(e, user)} key={user._id}>{user.name}</li>
            )
        })
    }

    return (
        <div>
            <h1>Friend List:</h1>
            <ul>
                {createUserList()}
            </ul>
        </div>
    )
}
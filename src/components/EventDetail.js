import React from 'react'
import {EventContainer, Title, Date, InfoBox, Detail} from '../Styled/EventDetail'

export default function EventDetail({selectedEvent}){
    //  2020-08-12T18:30

    let formattedTime = ''
    
    const formatDay = (day) => {
        let nums = day.split('')
        return parseInt(nums[0]) === 0 ? nums[1]: nums.join('') 
    }

    const formatTime = (time) => {
        let [unformatedHours, mins] = time.split(':')
        let hours = parseInt(unformatedHours)
        if(hours === 12){
            return `${hours}:${mins}pm`
        } else if(hours > 12){
            return `${hours-12}:${mins}pm`
        } else {
            return `${hours}:${mins}am`
        }
    }

    const formatDate = ()=> {
        let [date, unformattedTime] = selectedEvent.start.split('T')
        let [year, month, unformattedDay] = date.split('-')
        
        const months = {
            '01': 'January',
            '02': 'February',
            '03': 'March',
            '04': 'April',
            '05': 'May',
            '06': 'June',
            '07': 'July',
            '08': 'August',
            '09': 'September',
            '10': 'October',
            '11': 'November',
            '12': 'December',
        }

        formattedTime = formatTime(unformattedTime)

        let day = formatDay(unformattedDay)
        return `${months[month]} ${day}`
    }



    return(
        <EventContainer>
            <Date>{formatDate()}</Date>
            <Title>{selectedEvent.title}</Title>
            <div>Game info here</div>
            <InfoBox>
                <Detail>Starts at: {formattedTime}</Detail>
                <Detail>{selectedEvent.description}</Detail>
            </InfoBox>
        </EventContainer>
    )
}
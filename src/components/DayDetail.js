import React from 'react'
import {DateContainer, Date} from '../Styled/DayDetail'
import {formatDay} from '../hooks/dateFormatting'
export default function DayDetail({selectedDay}){

    let day = formatDay(selectedDay)

    return(
        <DateContainer>
            <Date>{day}</Date>
        </DateContainer>
    )
}
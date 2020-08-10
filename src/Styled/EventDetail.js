import styled from 'styled-components'
import {colors} from './Colors'

export const EventContainer = styled.div`
    width: 30%;
    max-width:30%; 
    padding: 0 1px 1px 1px;
`

export const Title = styled.h1`
    background-color: ${colors.black};
    color: ${colors.white};
    text-align: center;
    font-size: 20px;
    padding: 10px 0;
`
export const Date = styled.h2`
    background-color: ${colors.blue};
    color: ${colors.white};
    text-align: center;
    padding: 10px;
`

export const InfoBox = styled.div`
    padding: 10px; 
    border: 1px solid ${colors.blue};
`
export const Detail = styled.p`
    padding-bottom: 10px;
`

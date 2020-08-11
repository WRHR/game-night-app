import styled from 'styled-components'
import {colors} from './Colors'

export const DateContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 30%;
    max-width:30%; 
    padding: 65px 65px;
    justify-content:center;
    /* padding-right: 65px; */
`
export const Date = styled.h2`
    background-color: ${colors.blue};
    color: ${colors.white};
    text-align: center;
    padding: 10px;
    height: 19px;
`


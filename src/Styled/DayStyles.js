import styled from 'styled-components'
import {colors} from './Colors'

export const DateContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 30%;
    max-width:30%; 
    padding: 65px 65px;
    max-height: inherit;
    overflow-y: scroll;
    align-items:center;
`
export const Date = styled.h2`
    background-color: ${colors.blue};
    color: ${colors.white};
    text-align: center;
    padding: 10px 0px;
    height: 19px;
    width:100%;
`


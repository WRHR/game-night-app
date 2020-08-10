import styled from 'styled-components'
import {colors} from './Colors'

export const Title = styled.h1`
    background-color: ${colors.black};
    color: ${colors.white};
    text-align: center;
    font-size: 20px;
    padding: 10px 0;
`

export const InfoBox = styled.div`
    padding: 10px; 
    border: 1px solid ${colors.blue};
`

export const Detail = styled.p`
    padding-bottom: 10px;
`

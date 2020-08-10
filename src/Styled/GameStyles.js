import styled from 'styled-components'
import {colors} from './Colors'


export const GameImage = styled.div`
    height:250px;
    background-image: url(${props => props.src});
    background-position: center;
    background-size:cover;
    background-repeat: no-repeat;
    display: flex;
    align-items:flex-end;
    justify-content:space-between;
`

export const GameTitleOverlay = styled.h1`
    color: ${colors.white};
    -webkit-text-stroke: 1px ${colors.black};
    font-size: 30px;
`
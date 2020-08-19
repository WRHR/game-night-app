import styled, {keyframes} from 'styled-components'
import {colors} from './Colors'

const popIn = keyframes`
    0% { 
        top: 100%;
        visibility:hidden;
    }
    100% { 
        top: 50%;
        visibility:visibile;
    }
`

export const GameImage = styled.div`
    height:250px;
    max-height:250px;
    background-image: url(${props => props.src});
    background-position: center;
    background-size:cover;
    background-repeat: no-repeat;
    display: flex;
    align-items:flex-end;
    justify-content:space-between;
    width:100%;
    cursor:pointer;
`

export const GameTitleOverlay = styled.h1`
    color: ${colors.white};
    -webkit-text-stroke: 1px ${colors.black};
    font-size: 30px;
`

export const GamesContainer = styled.div`
    display:flex;
    flex-flow:row wrap;
    overflow-y: auto;
    max-height: 50%;
`

export const GameDetailContainer = styled.div`
    display:flex;
    flex-direction: column;
    position: absolute;
    z-index: 6;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: ${colors.black};
    color:${colors.white};
    width:700px;
    animation: ${popIn};
    animation-duration: 0.3s;
`

export const GameDetailImage = styled.div`
    height:300px;
    /* max-height:250px; */
    background-image: url(${props => props.src});
    background-position: center;
    background-size:cover;
    background-repeat: no-repeat;
    display: flex;
    align-items:flex-end;
    justify-content:space-between;
    width:100%;
    padding-bottom: 20px;
`

export const GameDescription = styled.p`
    padding:20px;
    line-height:1.5;
    
    max-height:200px;
    overflow-y:auto;
`
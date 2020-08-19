import styled, {keyframes} from 'styled-components'
import {colors} from './Colors'


const popIn = keyframes`
    0% { top: 100%}
    100% { top: 50%}
`

const slideOut = keyframes`
    0% {
        width: 0%;
        opacity:0;
        
    }
    100% {
        width: 100%;
        opacity: 1;
    }
`

export const EventFormContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index:5;
    display: flex;
    flex-direction:column;
    background-color:${colors.black};
    width:auto;
    animation: ${popIn};
    animation-duration: 0.3s;
    ` 
export const Form = styled.form`
    padding: 20px;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    color: ${colors.white};
`
export const FormTitleContainer = styled.div`
    display:flex;
    justify-content:space-between;
`

export const FormTitle = styled.h1`
    color: ${colors.white};
    padding-top: 10px;
    padding-left: 10px;
`

export const CloseButton = styled.button`
    padding: 3px 5px;
    margin:0;
    border-radius: 0;
`

export const FormButton = styled.button`
    width: max-content;
    border-radius: 1rem;
    margin: 5px 0;
    padding: 7px;
    background-color: hsl(211, 87%, 25%);
    color: hsl(35, 0%, 100%);
    font-size: small;
    cursor: pointer;
`
export const FormLi = styled.li`
    display: flex;
    flex-direction: column;
    margin: 5px;
    padding: 5px;
    color: ${colors.white};
    transition: all 0.2s;

    &:hover{
        background-color: ${colors.white};
        color: ${colors.black};
    }
`

export const GameSelectContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    animation: ${slideOut};
    animation-duration: 0.5s;
`
export const AttendeeSelectContainer = styled.div`
    width:180px;
     color: ${colors.white}; 
     padding-right:10px;

    animation: ${slideOut};
    animation-duration: 0.5s;
`

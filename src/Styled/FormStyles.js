import styled from 'styled-components'
import {colors} from './Colors'

export const EventFormContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index:5;
    display: flex;
    flex-direction:column;
    background-color:${colors.black};
    ` 
export const Form = styled.form`
    padding: 20px;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    color: ${colors.white};
    height: 345px;
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
    margin: 10px 0;
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
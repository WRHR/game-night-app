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
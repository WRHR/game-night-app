import styled from 'styled-components'
import {colors} from './Colors'

export const Title = styled.h1`
    background-color: ${colors.black};
    color: ${colors.white};
    text-align: center;
    font-size: 20px;
    padding: 10px 0;
    width:100%;
`

export const InfoBox = styled.div`
    padding: 10px;
    width:100%; 
`

export const Detail = styled.p`
    padding-bottom: 10px;
`
export const ThumbnailContainer = styled.div`
    height: 150px;
    background-image: 
        linear-gradient(270deg,
            rgba(0, 0, 0, 0.0), 
            rgba(255, 255, 255, 1.0)),
            url(${props => props.src});
    background-size:cover;
    display:flex;
    flex-direction: column;
    justify-content: center;
    font-size:20px;
    cursor: pointer;
    transition: 0.3s ease all;
    width:100%;
    
    &:hover {
        color:${colors.white};
        -webkit-text-stroke: 1px ${colors.black};
        background-image:
        linear-gradient(270deg,
            rgba(0, 0, 0, 0.0), 
            rgba(0, 0, 0, 0.0)),
            url(${props => props.src});
    }

    
`

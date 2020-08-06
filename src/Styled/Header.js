import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const HeaderContainer = styled.header`
    background-image: linear-gradient(hsl(214, 31%, 26%), hsl(211, 87%, 25%));
    padding:0 20px 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:10vh;
    max-height: 10vh;
    color: hsl(35, 80%, 82%);
`

export const Logout = styled(Link)`
    color: hsl(35, 80%, 82%)
`
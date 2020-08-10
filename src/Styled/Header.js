import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {colors} from './Colors'


export const HeaderContainer = styled.header`
    background-image: linear-gradient(${colors.blue}, ${colors.black});
    padding:0 20px 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:10vh;
    max-height: 10vh;
    color: ${colors.white};
`

export const Logout = styled(Link)`
    color: ${colors.white};
`
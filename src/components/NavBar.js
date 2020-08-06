import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {CalendarTodayRounded, PeopleAltRounded, SportsEsportsRounded} from '@material-ui/icons'
import {Nav, NavItems, NavItem, NavDetail} from '../Styled/NavBar'

const style={
    iconstyle:{
        fontSize:'2rem' 
    },
}

const NavBar = (props) => {
    const [hovered, setHovered] = useState(false)

    const handleMouseEnter =() => {
        setHovered(!hovered)
    }

    return(
        <Nav onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter}>
            <NavItems>
                <NavItem>
                    <CalendarTodayRounded style={style.iconstyle}/>
                    {hovered ? <NavDetail >Events</NavDetail> :null}
                </NavItem>
                <NavItem>
                    <SportsEsportsRounded style={style.iconstyle}/>
                    {hovered ? <NavDetail>Games</NavDetail> :null}
                </NavItem>
                <NavItem>
                    <PeopleAltRounded style={style.iconstyle}/>
                    {hovered ? <NavDetail>Friends</NavDetail> :null}
                </NavItem>
            </NavItems>
        </Nav>
    )
}
export default NavBar
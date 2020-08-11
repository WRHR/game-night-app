import React, {useState} from 'react'
import {CalendarTodayRounded, PeopleAltRounded, SportsEsportsRounded, HomeRounded} from '@material-ui/icons'
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
                <NavItem to='/'>
                    <HomeRounded style={style.iconstyle}/>
                    {hovered ? <NavDetail >Home</NavDetail> :null}
                </NavItem>
                <NavItem to='/events'>
                    <CalendarTodayRounded style={style.iconstyle}/>
                    {hovered ? <NavDetail >Events</NavDetail> :null}
                </NavItem>
                <NavItem to='/games'>
                    <SportsEsportsRounded style={style.iconstyle}/>
                    {hovered ? <NavDetail>Games</NavDetail> :null}
                </NavItem>
                <NavItem to='friends'>
                    <PeopleAltRounded style={style.iconstyle}/>
                    {hovered ? <NavDetail>Friends</NavDetail> :null}
                </NavItem>
            </NavItems>
        </Nav>
    )
}
export default NavBar
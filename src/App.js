import React, {useState, useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Home from './components/Home'
import Events from './components/Events'
import Games from './components/Games'
import Login from './components/Login';
import {profileUrl, eventsUrl} from './helpers/fetchHelpers'

function App() {
  const [user, setUser] = useState({})
  const [myEvents, setMyEvents] = useState([])

  const authorizeUser = () => {
    fetch(profileUrl, {
      method:'GET',
      headers:{ "Authorization": `Bearer ${localStorage.token}`}
    })
    .then(res => res.json())
    .then(result => {
      setUser(result.user)
      getUserEvents(result.user.events)
    })
  }

  const getUserEvents = async (userEvents) => { 
    let {events} = await fetch(eventsUrl).then(res => res.json())
    console.log(events)
    let filteredEvents = events.filter(event => userEvents.includes(event._id))
    console.log(filteredEvents)
    setMyEvents(filteredEvents)
  }

  useEffect(()=> {
    if(localStorage.token){ 
      authorizeUser()
    }
  },[])
  
  return (
    <div className="App">
      { user.name? <Header/> : null }
      <div className='page-display'>
        { user.name? <NavBar /> : null }
        <Switch>
          <PrivateRoute 
            exact 
            path='/'
            component={Home}
            user={user}
            myEvents={myEvents}
          />
          <PrivateRoute 
            exact 
            path='/events'
            component={Events}
            events={user.events}
            myEvents={myEvents}
            setMyEvents={setMyEvents}
          />
          <PrivateRoute 
            exact 
            path='/games'
            component={Games}

          />
          <Route 
            exact 
            path='/login' 
            render={(routerProps)=> {
              return <Login setUser={setUser} {...routerProps}/>
              }
            } 
          />
          <Redirect to='/' />
        </Switch>
      </div>
    </div>
  );
}

export default App;

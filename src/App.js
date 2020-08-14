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

// const testUser = {
//   name:{
//     firstname: 'Will',
//     lastname: 'Reeves'
//   },
//   email:'jonsmith@email.com',
//   gameLibrary:['1','2','3','4','5','6'],
//   events:['1','2','3','4','5','6','99'],
//   gamertags:{ps4:'jonnyboi'},
// }

// const eventList = [
//   {
//       id:'99', 
//       title: 'Borderlands!', 
//       start:'2020-08-07T08:30',
//       end:'2020-08-07', 
//       description: 'Gonna play some borderlands!',
//       game: {
//           id: 1, 
//           title: 'Borderlands 3',
//           rawg_id: 58617, 
//           background_url: "https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg",
//           platform: 'playstation'
//       }
//   },
//   {
//       id:'1', 
//       title: 'Borderlands Meet Up', 
//       start:'2020-08-09T14:30', 
//       end:'2020-08-09', 
//       description: 'Playing borderlands again. Gonna play some borderlands! Playing borderlands again. Gonna play some borderlands!Playing borderlands again. Gonna play some borderlands!Playing borderlands again. Gonna play some borderlands!Playing borderlands again. Gonna play some borderlands!',
//       game:{
//           id: 1, 
//           title: 'Borderlands 3',
//           rawg_id: 58617, 
//           background_url: "https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg",
//           platform: 'playstation'
//       }
//   },
//   {
//       id:'2', 
//       title: 'Pro League Practice', 
//       start:'2020-08-11T19:50', 
//       end:'2020-08-11',
//       description: 'Man this game makes me sad',
//       game:{
//           id: 2, 
//           title: 'Overwatch',
//           rawg_id: 58617, 
//           background_url: "https://media.rawg.io/media/games/4ea/4ea507ceebeabb43edbc09468f5aaac6.jpg",
//           platform: 'playstation'
//       }
//   },
//   {
//       id:'5', 
//       title: 'GTA Group', 
//       start:'2020-08-12T17:30', 
//       end:'2020-08-12',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//       game:{
//           id: 2, 
//           title: 'Grand Theft Auto V',
//           rawg_id: 58617, 
//           background_url: "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg",
//           platform: 'playstation'
//       }
//   },
//   {
//       id:'6', 
//       title: 'Portal Co-op', 
//       start:'2020-08-12T14:30', 
//       end:'2020-08-12',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//       game:{
//           id: 2, 
//           title: "Portal 2",
//           rawg_id: 58617, 
//           background_url: "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
//           platform: 'playstation'
//       }
//   },
//   {
//       id:'3', 
//       title: 'Smash Fun Times', 
//       start:'2020-08-12T18:30', 
//       end:'2020-08-12',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//       game:{
//           id: 2, 
//           title: "Super Smash Bros. Ultimate",
//           rawg_id: 58617, 
//           background_url: "https://media.rawg.io/media/games/9f3/9f3c513b301d8d7250a64dd7e73c62df.jpg",
//           platform: 'playstation'
//       }
//   },
//   {
//       id:'4', 
//       title: 'Diablo 3 Ladder Climb',
//       description: 'Fightin some demons, gonna climb the ranked ladder!', 
//       start:'2020-08-20T12:30', 
//       end:'2020-08-20',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//       game:{
//           id: 2, 
//           title: "Diablo 3",
//           rawg_id: 58617, 
//           background_url: "https://media.rawg.io/media/games/a27/a275556fab1a6acaded4cedad0f9dc80.jpg",
//           platform: 'playstation'
//       }, 
//   },
// ]

function App() {
  const [user, setUser] = useState({})
  const [myEvents, setMyEvents] = useState([])
  // setUser(testUser)

  const authorizeUser = () => {
    fetch(profileUrl, {
      method:'GET',
      headers:{ "Authorization": `Bearer ${localStorage.token}`}
    })
    .then(res => res.json())
    .then(result => setUser(result.user))
  }

  const getUserEvents = (events) => {
    let userEvents = events.map(event => {
    
    let eventList = fetch(eventsUrl).then(res => res.json())

      return eventList.select(el => el.id === event)
    })
    setMyEvents(userEvents)
  }

  useEffect(()=> {
    if(localStorage.token){ 
      authorizeUser()
    }
  },[])
  
  useEffect(()=>{
    if(user.events){
      getUserEvents(user.events)
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

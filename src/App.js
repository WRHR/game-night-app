import React, {useState, useEffect} from 'react';
import {Switch, Redirect} from 'react-router-dom'
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Home from './components/Home'
import Events from './components/Events'


const testUser = {
  name:{
    firstname: 'Will',
    lastname: 'Reeves'
  },
  email:'jonsmith@email.com',
  gameLibrary:[],
  events:[1,2,3,4],
  gamertags:{ps4:'jonnyboi'},
}

function App() {
  const [user, setUser] = useState({})

  // setUser(testUser)

  const getUser = async () => {
    await setUser(testUser)
  }

  useEffect(()=> {
    getUser()
  },[])
  
  return (
    <div className="App">
      <Header/>
      <div className='page-display'>
        <NavBar />
        <Switch>
          <PrivateRoute 
            exact 
            path='/'
            component={Home}
            user={user}
          />
          <PrivateRoute 
            exact 
            path='/events'
            component={Events}
            events={user.events}
          />
        <Redirect to='/' />
        </Switch>
      </div>
    </div>
  );
}

export default App;

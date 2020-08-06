import React, {useState, useEffect} from 'react';
import {Route, Switch, Redirect, Link} from 'react-router-dom'
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';
import Header from './components/Header';



const testUser = {
  name:{
    firstname: 'John',
    lastname: 'Smith'
  },
  email:'jonsmith@email.com',
  gameLibrary:[],
  events:[],
  gamertags:{ps4:'jonnyboi'},
}

function App() {
  const [user, setUser] = useState(null)

  const getUser = async () => {
    await setUser(testUser)
  }

  useEffect(()=> {
    getUser()
  },[])
  
  return (
    <div className="App">
      <Header user={user}/>
      <NavBar />
      {/* <Switch>
        <PrivateRoute />

      </Switch> */}
    </div>
  );
}

export default App;

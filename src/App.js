import React, {useState, useEffect} from 'react';
import {Route, Switch, Redirect, Link} from 'react-router-dom'
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';



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

  const getUser = () => {
    setUser(testUser)
  }

  useEffect(()=> {
    getUser()
    
  },[])
  console.log(user)


  return (
    <div className="App">
      <header>
        <h1>Welcome back {user ? user.name.firstname : null}</h1>
      </header>
      <NavBar />
      {/* <Switch>
        <PrivateRoute />

      </Switch> */}
    </div>
  );
}

export default App;

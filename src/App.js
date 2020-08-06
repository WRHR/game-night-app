import React, {useState, useEffect} from 'react';
import {Route, Switch, Redirect, Link} from 'react-router-dom'
import './App.css';

const testUser = {
  name:{
    first: 'John',
    last: 'Smith'
  },
  email:'jonsmith@email.com',
  gameLibrary:[],
  events:[],
  gamertags:{ps4:'jonnyboi'},
}
function App() {
  const [user, setUser] = useState({})


  useEffect(()=> {
    setUser(testUser)
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;

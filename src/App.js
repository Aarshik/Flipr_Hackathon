import React from 'react';
import './App.css';
import Navbar from './navbar';
import Header from './header';
import Teams from './Select_team';
import Demo from './Scoreboard';
import LeaderBoard from './LeaderBoard';
import Login from './Login';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Teams/>
      <Demo/> 
      <LeaderBoard/>
      <Login/>
      
   

    </div>
  );
}

export default App;

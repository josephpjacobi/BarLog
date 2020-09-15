import React from 'react';
import './App.css';
import { users } from './data';
import { restaurants } from './data'
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoginStatus] = useState(false)
  const [message, setMessage] = useState('');
  const [restaurant, setRestaurant] = useState('');

  const handleUsername = event => {
    setUsername(event.target.value)
  }

  const handlePassword = event => {
    setPassword(event.target.value)
  }

  const handleSubmit = (username, password) => {
    if (users[username] && users[username][password]) {
      setUser(users[username])
      setLoginStatus(true)
      if (users[username]['user']['workProfiles']) {
        console.log(users[username]["user"]["workProfiles"][0]['worksAt'])
        setRestaurant(restaurants[users[username]["user"]["workProfiles"][0]["worksAt"]]);
      }
      console.log(restaurant)
    } else {
      setMessage('invalid username and password')
    }
  }

  return (
    <div>
      {!isLoggedIn  ?
        <div>
          <div className="App">
            Username<input type="text" value={username} onChange={(e) => handleUsername(e)}></input>
            Password<input type="text" value={password} onChange={(e) => handlePassword(e)}></input>
            <button onClick={() => handleSubmit(username, password)}>Submit</button>
          </div>
          {message}
        </div>
      :
        <div>
          <h1>Welcome {users[username]['user']['name']}!</h1>
          <h2>Today at {restaurant.name}:</h2>
        </div>
      }
    </div>
  );
}

export default App;

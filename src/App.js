import './App.css';
import { useState } from 'react';

function App() {

  // const [email, setEmail] = useState('')
  // const [name, setName] = useState('')
  // const [password, setPassword] = useState('')

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: ''
  })

  const emailChangeHandler = (e) => {
    setEmail(e.currentTarget.value)
  }

  const nameChangeHandler = (e) => {
    setName(e.currentTarget.value)
  }

  const passwordChangeHandler = (e) => {
    setPassword(e.currentTarget.value)
  }

  return (
    <div className="App">
      <form>
        <div>
          <label>Email</label>
          <input type="email" onChange={emailChangeHandler} />
          <p>Entered email is: {email}</p>
        </div>
        <div>
          <label>Name</label>
          <input type="text" onChange={nameChangeHandler} />
          <p>Entered name is: {name}</p>
        </div>
        <div>
          <label>Password</label>
          <input type="password" onChange={passwordChangeHandler} />
          <p>Entered password is: {password}</p>
        </div>
      </form>
    </div>
  );
}

export default App;

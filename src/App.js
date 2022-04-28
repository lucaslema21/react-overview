import './App.css';
import { useReducer, useState } from 'react';

function App() {

  const [email, setEmail] = useState('')
  const emailReducer = (state, action) => {
    if (action.type === 'CHANGE_EMAIL_VALUE') {
      console.log('mi state', state)
      return { value : action.val }
    }
    return {
      value: ''
    }
  }
  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: ''});
  // const [name, setName] = useState('')
  // const [password, setPassword] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    password: ''
  })

  const emailChangeHandler = (e) => {
    // setEmail(e.currentTarget.value)
    dispatchEmail({
      type: 'CHANGE_EMAIL_VALUE',
      val: e.target.value
    })
    // setFormData((prevState) => {
    //   return {
    //     ...prevState,
    //     email: e.target.value
    //   }
    // })
  }

  const nameChangeHandler = (e) => {
    // setName(e.currentTarget.value)
    setFormData({
      ...formData,
      name: e.target.value
    })
  }

  const passwordChangeHandler = (e) => {
    // setPassword(e.currentTarget.value)
    setFormData({
      ...formData,
      password: e.target.value
    })
  }

  return (
    <div className="App">
      <form>
        <div>
          <label>Email</label>
          <input type="email" onChange={emailChangeHandler} />
          {/* <p>Entered email is: {email}</p> */}
          <p>Entered email is: {emailState.value}</p>
        </div>
        <div>
          <label>Name</label>
          <input type="text" onChange={nameChangeHandler} />
          <p>Entered name is: {formData.name}</p>
        </div>
        <div>
          <label>Password</label>
          <input type="password" onChange={passwordChangeHandler} />
          <p>Entered password is: {formData.password}</p>
        </div>
      </form>
    </div>
  );
}

export default App;

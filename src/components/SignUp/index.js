import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebaseConfig';

const SignUp = () => {

  const data = {
    pseudo: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const [loginData, setLoginData] = useState(data);
  const [error, setError] = useState('')

  const handleChange = e => {
      setLoginData({...loginData, [e.target.id]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = loginData;
    createUserWithEmailAndPassword(auth, email, password)
    .then(user => {
        setLoginData({...data});
    })
    .catch(error => {
      setError(error);
      setLoginData({...data});
    })
  }

  const { pseudo, email, password, confirmPassword } = loginData;

  const btn = pseudo === '' || email === '' || password === '' || password !== confirmPassword
  ? <button disabled>Register</button> : <button>Register</button>

  const errorMsg = error !== '' && <span>{error.message}</span>;


  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
          <div className="formBoxLeftSignup">
          </div>
          <div className="formBoxRightSignup">
            <div className="formContent">

            {errorMsg}

              <form>
                <h2>Register</h2>
                <div className="inputBox">
                  <input onChange={handleChange} type="text" value={pseudo} id="pseudo" required />
                  <label htmlFor="pseudo">Username</label>
                </div>

                <div className="inputBox">
                  <input onChange={handleChange} type="email" value={email} id="email" required />
                  <label htmlFor="email">Email</label>
                </div>

                <div className="inputBox">
                  <input onChange={handleChange} type="password" value={password} id="password" required />
                  <label htmlFor="password">Password</label>
                </div>

                <div className="inputBox">
                  <input onChange={handleChange} type="password" value={confirmPassword} id="confirmPassword" required />
                  <label htmlFor="confirmPassword">Confirm Password</label>
                </div>
                {btn}
              </form>
            </div>
          </div>
      </div>
    </div>
  )
}

export default SignUp;

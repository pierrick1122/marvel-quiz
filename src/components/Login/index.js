import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebaseConfig';


const Login = () => {

  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const [btn, setBtn] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  useEffect(() => {
    if(password.length > 5 && email !== '') {
      setBtn(true);
    } else if(btn) {
        setBtn(false)
    }
  }, [password, email, btn])

  const handleSubmit = e => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then(user => {
      setEmail('');
      setPassword('');
      navigate('/welcome', { replace: true});
    })
    .catch(error => {
      setError(error);
      setEmail('');
      setPassword('');
    })

  }

  const errorMsg = error !== '' && <span>{error.message}</span>;

  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftLogin">
        </div>
            <div className="formBoxRightSignup">
              <div className="formContent">

                {errorMsg}

                <form onSubmit={handleSubmit}>
                  <h2>Connect</h2>
                  <div className="inputBox">
                    <input onChange={e => setEmail(e.target.value)} type="email" value={email} required />
                    <label htmlFor="email">Email</label>
                  </div>

                  <div className="inputBox">
                    <input onChange={e => setPassword(e.target.value)} type="password" value={password} required />
                    <label htmlFor="password">Password</label>
                  </div>

                  {<button disabled={btn ? false : true }>Log in</button>}

                </form>
                <div className="linkContainer">
                  <Link className="simpleLink" to="/signup">New on Marvel-quiz?Register now!</Link>>
                  <br />
                  <Link className="simpleLink" to="/forgetpassword">Forget password? Click here!</Link>
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Login;

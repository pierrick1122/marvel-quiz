import React, { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';


const Logout = () => {

  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if(checked) {
      signOut(auth).then(() => {
        setTimeout(() => {
            navigate('/')
            alert("You have been disconnected.")
        }, 1000);
      }).catch((error) => {
          alert("There was an error, could'nt disconnected.")
      })
    }
  }, [checked])

  const handleChange = event => {
    setChecked(event.target.checked);
  }

  return (
    <div className="logoutContainer">
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <span className="slider round"></span>
      </label>

    </div>
  )
}

export default Logout;

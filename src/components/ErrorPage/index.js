import React from 'react'
import Batman from '../../images/batman.png';

const centerH2 = {
  textAlign: 'center',
  marginTop: '50px'
}

const centerImg = {
  display: 'block',
  margin: '40px auto'
}

const ErrorPage = () => {
  return (
    <div className="quiz-bg">
      <div className="container">
        <h2 style={centerH2}>Oups, this page does'nt exist!</h2>
        <img src={Batman} style={centerImg} alt="error page" />
      </div>
    </div>
  )
}

export default ErrorPage;

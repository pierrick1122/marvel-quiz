import React from 'react';
import Logout from '../Logout/index';
import Quiz from '../Quiz/index';

const Welcome = () => {
  return (
    <div className="quiz-bg">
      <div className="container">
        <Logout />
        <Quiz />
      </div>
    </div>
  )
}

export default Welcome;

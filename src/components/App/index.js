import '../../App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Header/index';
import Landing from '../Landing/index';
import Footer from '../Footer/index';
import Welcome from '../Welcome/index';
import Login from '../Login/index';
import SignUp from '../SignUp/index';
import ErrorPage from '../ErrorPage/index';
import ForgetPassword from '../ForgetPassword';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route path="/welcome" element={<Welcome/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/forgetpassword" element={<ForgetPassword/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

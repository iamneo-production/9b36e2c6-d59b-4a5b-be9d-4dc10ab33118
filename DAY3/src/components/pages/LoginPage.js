import React, { useState } from 'react';
import { Link , useHistory} from 'react-router-dom';
import '../../App.css'



const LoginPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Invalid email format');
    } else if (email === 'example@gmail.com' && password === 'password') {
  
      setErrorMessage('');
      console.log('Login successful!');
      history.push('/home');
    } else {
     
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <center>
      <div className="container">
        <h2 style = {{color : 'white'}}>Login</h2>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" className="form-control" value={email} onChange={handleEmailChange} required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
            <input type="password" className="form-control" value={password} onChange={handlePasswordChange} required />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <footer>
                <p style = {{color : 'white'}}>First time? <Link to="/register">Create an account</Link>.</p>
                <p style = {{color : 'white'}}><Link to="/">Back to Homepage</Link>.</p>
            </footer>
      </div></center>
    </div>
  );
};

export default LoginPage;
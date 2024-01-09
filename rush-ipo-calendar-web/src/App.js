import React, { useState } from 'react';
import IPOCalendar from './Component/IPOCalendar';
import ExchangeRates from './Component/ExchangeRates';
import './App.css';

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registrationData, setRegistrationData] = useState({ email: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (loginData.email === registrationData.email && loginData.password === registrationData.password) {
      alert('Login successful!');
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleRegistration = () => {
    setRegistrationData({ email: loginData.email, password: loginData.password });
    setIsRegistered(true);
    alert('Registration successful!');
  };

  const handleInputChange = (event, type) => {
    const { name, value } = event.target;
    const dataToUpdate = type === 'register' ? loginData : registrationData;
    const updatedData = { ...dataToUpdate, [name]: value };
    if (type === 'register') {
      setLoginData(updatedData);
    } else {
      setRegistrationData(updatedData);
    }
  };

  const renderRegistrationForm = () => (
    <div>
      <h2>Register</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleRegistration(); }}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={(e) => handleInputChange(e, 'register')}
          required
        />
        <br />
        <input 
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) => handleInputChange(e, 'register')}
          required
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );

  const renderLoginForm = () => (
    <div>
      <h2>Login</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={(e) => handleInputChange(e, 'login')}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) => handleInputChange(e, 'login')}
          required
        />
        <br />
        <button  type="submit">Login</button>
      </form>
    </div>
  );

  return (
    <div>
      {isLoggedIn ? (
        <div>
          {/* Your authenticated content here */}
          <h1>Welcome!</h1>
          <IPOCalendar />
          <ExchangeRates />
        </div>
      ) : (
        <div className='test'>
          {!isRegistered ? renderRegistrationForm() : renderLoginForm()}
        </div>
      )}
    </div>
  );
}

export default App;

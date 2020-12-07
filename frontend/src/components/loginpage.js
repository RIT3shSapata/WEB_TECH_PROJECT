//jshint esversion:8

import apartmentimage from './apartment.jpeg';
import './loginpage.css';
import { Redirect, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import { fetchUser } from '../actions';
import { connect } from 'react-redux';
import localhost from '../apis/localhost';

function Loginpage({ fetchUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();

  const onChangeName = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitFunc = async (e) => {
    e.preventDefault();

    const data = { username: username, password: password };

    try {
      const res = await localhost.post('/user/login', data);
      console.log(res.data.token);
      fetchUser(res.data.token);
      alert('Success');
      let path = '/dashboard';
      history.push(path);
    } catch (error) {
      console.log(error);
    }

    // await axios
    //   .post('http://localhost:4000/user/login', data)
    //   .then((res) => {
    //     console.log('token', res.data.token);
    //     fetchUser(res.data.token);

    //     alert('Success');
    //     let path = '/';
    //     history.push(path);
    //   })
    //   .catch((error) => console.log(error));
  };

  return (
    <div>
      <link
        href='//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css'
        rel='stylesheet'
        id='bootstrap-css'></link>
      <script src='//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js'></script>
      <script src='//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
      <head>
        <link
          rel='stylesheet'
          href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
          integrity='sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO'
          crossOrigin='anonymous'></link>
        <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.6.1/css/all.css'
          integrity='sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP'
          crossOrigin='anonymous'></link>
      </head>
      <html>
        <body>
          <link rel='preconnect' href='https://fonts.gstatic.com'></link>
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap'
            rel='stylesheet'></link>
          <div className='container align-items-center justify-content-center h-100'>
            <div className='d-flex align-items-center justify-content-center h-100'>
              <h1>APNA GHAR</h1>
              <h5>An online community for Manmai Apartments</h5>
              <div className='user_card'>
                <div className='d-flex justify-content-center'>
                  <div className='brand_logo_container'>
                    <img
                      src={apartmentimage}
                      className='brand_logo'
                      alt='Logo'></img>
                  </div>
                </div>
                <div className='d-flex justify-content-center form_container'>
                  <form onSubmit={submitFunc}>
                    <div className='input-group mb-3'>
                      <div className='input-group-append'>
                        <span className='input-group-text'>
                          <i className='fas fa-user'></i>
                        </span>
                      </div>
                      <input
                        type='text'
                        name='username'
                        className='form-control input_user'
                        onChange={onChangeName}
                        value={username}
                        placeholder='username'></input>
                    </div>
                    <div className='input-group mb-2'>
                      <div className='input-group-append'>
                        <span className='input-group-text'>
                          <i className='fas fa-key'></i>
                        </span>
                      </div>
                      <input
                        type='password'
                        name='password'
                        className='form-control input_pass'
                        onChange={onChangePassword}
                        value={password}
                        placeholder='password'></input>
                    </div>
                    <div className='d-flex justify-content-center mt-3 login_container'>
                      <button
                        type='submit'
                        name='button'
                        className='btn login_btn'>
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    </div>
  );
}
export default connect(undefined, { fetchUser })(Loginpage);

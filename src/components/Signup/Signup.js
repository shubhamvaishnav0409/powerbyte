import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

import InputControl from '../InputControl/InputControl';
import { auth } from '../../firebase';
import setUserLoggedin from '../../utils/LoggedInSender';

import './logo_full.png';

function Signup(props) {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    email: '',
    pass: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg('Fill all fields');
      return;
    }
    setErrorMsg('');

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        console.log(res);
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        setUserLoggedin();
        localStorage.setItem("user", true)
        navigate('/panel/dashboard');
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  const titleS = {
    fontColor: `blue`,
    fontWeight: `700`,
    fontFamily: `cursive`,
    fontSize: `1.5rem`,
  };

  return (
    <>
      <nav className="navbar navbar-bg navbar-expand-lg ">
        <div className="container-fluid">
          <span style={titleS} className="navbar-brand" href="">
            <span className="logo-full"></span>
          </span>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <span className="nav-link disabled" tabIndex="-1" aria-disabled="true">With us manage your energy consumption</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='home homeS'>
        <div className='container my-5 containerStyle'>
          <form className='form'>
            <h4 style={{ textAlign: `center` }} className='my-2'>
              Welcome You To PowerByte - Sign Up
            </h4>
            <div className='mb-3'>
              <InputControl
                className='form-control'
                label='Name'
                placeholder='Enter User Name'
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, name: event.target.value }))
                }
              />
            </div>
            <div className='mb-3'>
              <InputControl
                className='form-control'
                label='Email'
                type='text'
                placeholder='Enter Your Email'
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                }
              />
              {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div className='mb-3'>
              <InputControl
                className='form-control'
                id='exampleInputPassword1'
                label='Password'
                type='password'
                placeholder='Password'
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, pass: event.target.value }))
                }
              />
            </div>
          </form>
          <div>
            <b>{errorMsg}</b>
            <button
              disabled={submitButtonDisabled}
              onClick={handleSubmission}
              className='btn btn-primary my-4 mx-4'
            >
              Signup
            </button>
            <p>
              Already have an account?{' '}
              <span>
                <Link to='/login' className='formLink'>Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

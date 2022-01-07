import React, { useState, useEffect } from 'react';
import '../Styling/Welcome.css';

import geometricBackground2 from '../Media/geometricBackground2.mp4'
import { Link } from 'react-router-dom';

function Welcome(props) {

  // save user name input to local storage to persist state to Home page
  const [name, setName] = useState(() => {
    const saved = localStorage.getItem('name');
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name));
  }, [name]);

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addName(name);
    setName('');
  }

  function handleClear() {
    localStorage.removeItem('name');
    setName('');
  }

    return ( 
      <div className="welcome-container">
        <video className='videoTag' autoPlay loop muted>
          <source src={geometricBackground2} type='video/mp4' />
        </video>
        <div className="form-container">
          <h1 className="welcome">
            Welcome.
          </h1>
          <form onSubmit={handleSubmit}>
            <label
                htmlFor="new-name-input"
                className="nameLabel">
                For a customized experience, please enter your name:
            </label>
            <input 
                type="text"
                id="new-name-input"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange} 
                className="userName"/>
            <button 
                type="submit"
                className="submit">
              <Link 
                to="/Home" 
                className="submitText">
                Submit
              </Link>
           </button>
          <button
            className="reset"
            onClick={handleClear}>
            Reset
          </button>
          </form>
        </div>
      </div>
    );
  }

export default Welcome;
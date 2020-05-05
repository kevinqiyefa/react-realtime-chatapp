import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import styles from './Join.module.css';
// import PropTypes from 'prop-types'

const Join = (props) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const handleClick = (e) => {
    return !name || !room ? e.preventDefault() : null;
  };

  return (
    <div className="join">
      <div className="joinContainer">
        <h1 className="heading">Join a Chat Room</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <Link
          onClick={(e) => handleClick(e)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className={'button mt-20'} type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

// Join.propTypes = {

// }

export default Join;

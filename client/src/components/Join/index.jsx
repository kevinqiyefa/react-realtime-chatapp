import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import styles from './Join.module.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const handleClick = (e) => {
    return !name || !room ? e.preventDefault() : null;
  };

  return (
    <div className={styles.JoinContainer}>
      <h1 className={styles.heading}>Join a Chat Room</h1>
      <div>
        <input
          placeholder="Name"
          className={styles.joinInput}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="Room"
          className={cx(styles.joinInput, styles.mt20)}
          type="text"
          onChange={(e) => setRoom(e.target.value)}
        />
      </div>
      <Link
        onClick={(e) => handleClick(e)}
        to={`/chat?name=${name}&room=${room}`}
      >
        <button className={cx(styles.joinButton, styles.mt20)} type="submit">
          Sign In
        </button>
      </Link>
    </div>
  );
};

export default Join;

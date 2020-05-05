import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import styles from './Chat.module.css';
// import PropTypes from 'prop-types'

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const ENDPOINT = 'http://localhost:3001';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);
    setRoom(room);
    setName(name);
    socket.emit('join', { name, room });
  }, [ENDPOINT, location.search]);

  return <div>Chat</div>;
};

// Chat.propTypes = {

// }

export default Chat;

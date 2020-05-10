import React, { useState, useEffect, useCallback } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import InputForm from '../InputForm';
import InfoBar from '../InfoBar';
import styles from './Chat.module.css';

// import PropTypes from 'prop-types'

let socket;

const Chat = ({ location, history }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const ENDPOINT = 'http://localhost:3001';

  useEffect(() => {
    console.log('sss');
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);
    setRoom(room);
    setName(name);
    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
        history.replace('/');
        socket.disconnect(true);
      }
    });
  }, [ENDPOINT, location.search, history]);

  useEffect(() => {
    console.log('in message');
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  console.log(messages);

  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div className="chat">
      <div className="container">
        <InfoBar room={room} />
        {/* <Messages messages={messages} name={name} /> */}
        <InputForm
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      {/* <TextContainer users={users}/> */}
    </div>
  );
};

// Chat.propTypes = {

// }

export default React.memo(Chat);

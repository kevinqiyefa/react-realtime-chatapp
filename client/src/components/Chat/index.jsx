import React, { useState, useEffect, useMemo } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import InputForm from '../InputForm';
import InfoBar from '../InfoBar';
import Messages from '../Messages';
import TextContainer from '../TextContainer';
import styles from './Chat.module.css';

let socket;

const Chat = ({ location, history }) => {
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
    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
        history.replace('/');
        socket.disconnect(true);
      }
    });
  }, [ENDPOINT, location.search, history]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });
    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  const memoInfoBar = useMemo(() => <InfoBar room={room} />, [room]);

  return (
    <>
      <div className={styles.ChatContainer}>
        {memoInfoBar}
        <Messages messages={messages} name={name} />
        <InputForm
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </>
  );
};

export default React.memo(Chat);

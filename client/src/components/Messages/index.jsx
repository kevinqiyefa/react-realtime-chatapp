import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import PropTypes from 'prop-types';
import Message from './Message';
import styles from './Messages.module.css';

const Messages = ({ messages, name }) => (
  <ScrollToBottom className={styles.messages}>
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    ))}
  </ScrollToBottom>
);

Messages.propTypes = {
  messages: PropTypes.array,
  name: PropTypes.string,
};

export default Messages;

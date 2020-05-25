import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';
import PropTypes from 'prop-types';

const Messages = ({ messages, name }) => (
  <ScrollToBottom className="messages">
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

import React from 'react';
import PropTypes from 'prop-types';

const InputForm = ({ message, setMessage, sendMessage }) => {
  return (
    <form className="form" onSubmit={(e) => sendMessage(e)}>
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
      />
      <button className="sendButton" type="submit">
        Send
      </button>
    </form>
  );
};

InputForm.propTypes = {
  message: PropTypes.string,
  setMessage: PropTypes.func,
  sendMessage: PropTypes.func,
};

export default InputForm;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputForm.module.css';

const InputForm = ({ message, setMessage, sendMessage }) => {
  return (
    <form className={styles.inputForm} onSubmit={(e) => sendMessage(e)}>
      <input
        className={styles.input}
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
      />
      <button className={styles.sendButton} type="submit">
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

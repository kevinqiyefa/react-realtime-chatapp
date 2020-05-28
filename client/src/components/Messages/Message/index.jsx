import React from 'react';
import ReactEmoji from 'react-emoji';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Message.module.css';

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <div className={cx(styles.messageContainer, styles.justifyEnd)}>
      <p className={cx(styles.sentText, styles.pr10)}>{trimmedName}</p>
      <div className={cx(styles.messageBox, styles.backgroundBlue)}>
        <p className={cx(styles.messageText, styles.colorWhite)}>
          {ReactEmoji.emojify(text)}
        </p>
      </div>
    </div>
  ) : (
    <div className={cx(styles.messageContainer, styles.justifyStart)}>
      <div className={cx(styles.messageBox, styles.backgroundLight)}>
        <p className={cx(styles.messageText, styles.colorDark)}>
          {ReactEmoji.emojify(text)}
        </p>
      </div>
      <p className={cx(styles.sentText, styles.pl10)}>{user}</p>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.object,
  name: PropTypes.string,
};

export default Message;

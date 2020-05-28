import React from 'react';
import PropTypes from 'prop-types';
import onlineIcon from '../../assets/onlineIcon.png';
import closeIcon from '../../assets/closeIcon.png';
import styles from './InfoBar.module.css';

const InfoBar = ({ room }) => {
  return (
    <div className={styles.InfoBarContainer}>
      <div className={styles.leftInnerContainer}>
        <img className={styles.onlineIcon} src={onlineIcon} alt="online icon" />
        <h3>{room}</h3>
      </div>
      <div className={styles.rightInnerContainer}>
        <a href="/">
          <img src={closeIcon} alt="close icon" />
        </a>
      </div>
    </div>
  );
};

InfoBar.propTypes = {
  room: PropTypes.string,
};

export default InfoBar;

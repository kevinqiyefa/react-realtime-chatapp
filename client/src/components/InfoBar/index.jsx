import React from 'react';
import onlineIcon from '../../assets/onlineIcon.png';
import closeIcon from '../../assets/closeIcon.png';
import PropTypes from 'prop-types';

const InfoBar = ({ room }) => {
  console.log('InfoBar');
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online icon" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer" style={{ backgroundColor: 'gray' }}>
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

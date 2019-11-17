import React from 'react';

const Notification = ({ message, type }) => (message === null ? null : <div className={type}>{message}</div>);

export default Notification;

import React from 'react';
import './Alert.css';

const Alert = ({ error }) => {
  return (
    <div role="alert" className="Alert">
      {error && <p>{error}</p>}
    </div>
  );
};

export default Alert;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';

const Card = ({ jsonData }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    copy(jsonData);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="card">
      <div className="card-header">
        <button onClick={handleCopyClick}>
          {isCopied ? 'Copied!' : 'Copy to Clipboard'}
        </button>
      </div>
      <div className="card-content">
        <pre>{jsonData}</pre>
      </div>
    </div>
  );
};

Card.propTypes = {
  jsonData: PropTypes.string.isRequired,
};

export default Card;

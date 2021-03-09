import React, { useState } from 'react';

const Switch = ({ label, onToggle }) => {
  const [enabled, setEnabled] = useState(false);

  const handleClick = () => {
    setEnabled(!enabled);
    onToggle(enabled);
  };

  return (
    <button onClick={handleClick}>
      {label}: {enabled ? 'enabled' : 'disabled'}
    </button>
  );
};

export default Switch;

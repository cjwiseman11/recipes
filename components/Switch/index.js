import React, { useState } from 'react';
import styles from './switch.module.css';

const Switch = ({ label, options, onSelected }) => {
  const [selected, setSelected] = useState(options[0]);

  const handleChange = (option) => {
    setSelected(option);
    onSelected(option);
  };

  return (
    <fieldset role="radio-group" className={styles.container}>
      <legend>{label}</legend>
      {options.map((option) => (
        <div className={styles.control}>
          <input
            type="radio"
            id={option}
            name={option}
            value={option}
            checked={selected === option}
            onChange={() => handleChange(option)}
          />
          <label for={option}>{option}</label>
        </div>
      ))}
    </fieldset>
  );
};

export default Switch;

import React from 'react';
import '../css/index.css';

function Dialog({ onClose }) {
  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <p>This is a dialog box.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Dialog;
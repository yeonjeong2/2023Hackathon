import React from 'react';

function Modal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Modal Window</h2>
        <p>This is the content of the modal.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;

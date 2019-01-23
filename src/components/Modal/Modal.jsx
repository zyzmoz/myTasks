import React from 'react';
import './modal.css';

const Modal = ({component}) => {
  let Component = component;
  return (
    <div className="modal">
      <div className="modal-content">
        <Component />
      </div>
    </div>
  );
};

export default Modal;
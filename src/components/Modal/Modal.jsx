import React from 'react';
import './modal.css';
import { connect } from 'react-redux';

const mapState = (state) => ({
  modals: state.modals
})



const Modal = (props) => {  
  if (!props.modals) {
    return '';
  } else {
    return (
      <div className="modal">
        <div className="modal-content">
          <props.modals.Component />
        </div>
      </div>
    );
  }
};

export default connect(mapState)(Modal);
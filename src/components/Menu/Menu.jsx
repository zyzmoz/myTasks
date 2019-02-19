import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modalManager';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import './menu.css';
import TaskForm from '../TaskForm/TaskForm';

const mapState = (state) => ({
  modals: state.modals
})

const actions = {
  openModal,
  logout
}

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="menu-header">
          
        </div>
        <div className="menu-action">
          <button onClick={() => this.props.openModal(TaskForm)} className="btn large full mint">
            Create Task
          </button>
        </div>
        <div className="menu-list">
          <ul>
            <li className="menu-item">
              <Link to="/" >Task Feed</Link>
            </li>
            <li className="menu-item">
              <Link as="li" to="/archive" className="menu-item">Archive</Link>
            </li>
            <li className="menu-item">
              <Link as="li" to="/people" className="menu-item">People</Link>
            </li>
            <li onClick={() => this.props.logout()} className="menu-item">
              <p>Logout</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(mapState, actions)(Menu);
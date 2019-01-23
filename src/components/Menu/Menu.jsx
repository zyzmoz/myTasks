import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="menu-header">
          Task
        </div>
        <div className="menu-action">
          <button className="btn large full mint">
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


          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
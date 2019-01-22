import React, { Component } from 'react';
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
            <li className="menu-item">Task Feed</li>
            <li className="menu-item">Archive</li>
            <li className="menu-item">Add People</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
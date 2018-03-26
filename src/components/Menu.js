import React, { Component } from 'react';
import { Menu, MenuItem, Item, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const MenuComponent = () =>
  <Menu>    
    <Link className="menu item" to="/">Home</Link>
    <Link className="menu item" to="/messages">Messages</Link>
    <Link className="menu item" to="/friends">Friends</Link>    
    <Menu.Menu position="right">
      <MenuItem>
        <Input icon="search" type="text" placeholder="Search" />
      </MenuItem>
      <MenuItem onClick={() => alert('Logout')}>Logout</MenuItem>
    </Menu.Menu>
  </Menu>


export default MenuComponent;
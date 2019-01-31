import React from 'react';
import { withAuthentication } from '../../hoc/withAuthentication';
import Menu from '../Menu/Menu';
import Modal from '../Modal/Modal';
import HomePage from '../../pages/Home/Home';

const Dash = () => {
  return (
    <div className="master wrapper">      
      <Modal />
      <Menu />
      <HomePage />      
    </div>
  );
};

export default withAuthentication(Dash);
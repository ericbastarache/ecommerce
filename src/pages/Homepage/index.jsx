import React from 'react';
import Directory from '../../components/Directory';
import './styles.scss';

const Homepage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <Directory />
    </div>
  </div>
);

export default Homepage;
import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Zhraa } from '../zhraa';

const Home = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Zhraa />
    </main>
  )
}

export default Home


// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component


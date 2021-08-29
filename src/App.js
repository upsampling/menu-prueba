import React from 'react';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import { Inicio } from './components/Inicio';
import { NavBar } from './components/NavBar';

import "./Styles.css";

export const App = () => {
  return (
    <div>
      <NavBar/>
      <Inicio/>
      <Body/>
      <Footer/>
    </div>
  )
}

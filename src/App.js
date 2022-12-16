import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Highlights from './components/highlights/Highlights';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="flex flex-col w-screen relative">
      <Header />
      <Navigation />
      <Highlights />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

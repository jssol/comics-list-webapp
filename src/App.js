import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Highlights from './components/highlights/Highlights';
import Footer from './components/footer/Footer';
import { fetchCurrentUser } from './redux/user/user';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch]);

  return (
    <div className="flex flex-col w-screen overflow-x-hidden relative">
      <Header />
      <Navigation />
      <Highlights />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;

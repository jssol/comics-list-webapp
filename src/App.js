import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Highlights from './components/highlights/Highlights';
import Footer from './components/footer/Footer';
import { fetchCurrentUser } from './redux/user/user';

const App = () => {
  const [visible, setVisible] = useState(true);
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && token) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch]);

  useMemo(() => {
    if (pathname === '/dashboard') {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [pathname]);

  return (
    <div className="flex flex-col w-screen overflow-x-hidden relative">
      <Header />
      <Navigation />
      {visible && <Highlights />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;

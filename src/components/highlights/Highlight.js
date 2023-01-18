import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Title from '../shared/Title';

const Highlight = ({ event }) => {
  const [style, setStyle] = useState({});

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setStyle({
        backgroundImage: `url(${event.thumbnail.path}.${event.thumbnail.extension})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxShadow: 'inset 0 0 0 2000px rgba(39, 41, 53, 0.7)',
        width: '100%',
        height: '38rem',
      });
    } else {
      setStyle({});
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <div className="w-full h-full overflow-hidden" style={style}>
      <img
        alt={event.title}
        src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
        className="w-full h-48 object-cover md:hidden"
      />
      <div className="w-full md:h-full flex flex-col justify-center px-6 md:py-28 md:px-16 lg:py-32 lg:px-64">
        <Title>{event.title}</Title>
        <p className="mt-8">{event.description}</p>
        <NavLink
          to="/event/:id"
          className="w-32 h-12 flex ml-2 mt-4 items-center justify-center px-4 py-2 bg-red-500 uppercase skew-x-[-20deg] font-semibold"
        >
          <div className="skew-x-[20deg] text-center">Read now!</div>
        </NavLink>
      </div>
    </div>
  );
};

Highlight.propTypes = {
  event: PropTypes.shape().isRequired,
};

export default Highlight;

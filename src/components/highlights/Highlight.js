import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Title from '../shared/Title';

const Highlight = ({ event }) => (
  <div className="w-full h-full overflow-hidden">
    <img
      alt={event.title}
      src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
      className="w-full h-48 object-cover md:hidden"
    />
    <div className="w-full flex flex-col justify-between px-6">
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

Highlight.propTypes = {
  event: PropTypes.shape().isRequired,
};

export default Highlight;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HighlightsCarousel from './HighlightsCarousel';
import { fetchEvents } from '../../redux/events/events';

const Highlights = () => {
  const dispatch = useDispatch();
  const eventsState = useSelector((state) => state.events);
  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const { status, events, error } = eventsState;

  return (
    <section className="relative z-0 Highlights">
      {status === 'loading' && <div>Loading...</div>}
      {status === 'completed' && <HighlightsCarousel events={events} />}
      {status === 'failed' && <div>{error}</div>}
    </section>
  );
};

export default Highlights;

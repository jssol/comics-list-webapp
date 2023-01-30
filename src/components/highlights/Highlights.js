import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HighlightsCarousel from './HighlightsCarousel';
import Spinner from '../shared/Spinner';
import Error from '../shared/Error';
import { fetchEvents } from '../../redux/events/events';

const Highlights = () => {
  const dispatch = useDispatch();
  const eventsState = useSelector((state) => state.events);

  const { status, events, error } = eventsState;

  useEffect(() => {
    if (status === 'idle' || events === []) dispatch(fetchEvents());
  }, [dispatch, status, events]);

  return (
    <section className="relative z-0 Highlights">
      {status === 'loading' && (
        <Spinner containerStyle={{ height: '38rem' }} color="white" />
      )}
      {status === 'completed' && <HighlightsCarousel />}
      {status === 'failed' && <Error error={error} />}
    </section>
  );
};

export default Highlights;

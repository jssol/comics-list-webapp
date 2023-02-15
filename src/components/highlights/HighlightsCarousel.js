import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-material-ui-carousel';
import { FaChevronLeft, FaChevronRight, FaSpider } from 'react-icons/fa';
import Highlight from './Highlight';

const HighlightsCarousel = () => {
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const eventsState = useSelector((state) => state.events);
  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) {
      setIndicatorStyle({
        style: {
          position: 'absolute',
          bottom: '1rem',
          right: '2rem',
          textAlign: 'right',
          zIndex: 10,
        },
      });
    } else {
      setIndicatorStyle({
        style: {
          position: 'absolute',
          bottom: '1rem',
          right: '2rem',
          textAlign: 'right',
        },
      });
    }
  }, [setIndicatorStyle]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const { events } = eventsState;

  return (
    <>
      {events.length !== 0 && (
        <Carousel
          className="w-full h-[38rem] relative overflow-hidden"
          NextIcon={<FaChevronRight />}
          PrevIcon={<FaChevronLeft />}
          IndicatorIcon={<FaSpider />}
          indicatorIconButtonProps={{
            style: {
              marginLeft: '0.5rem',
              color: 'rgba(156, 163, 175, 1)',
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              color: 'rgba(239, 68, 68, 1)',
            },
          }}
          indicatorContainerProps={indicatorStyle}
          navButtonsWrapperProps={{
            style: {
              padding: '0 2rem',
            },
          }}
          animation="slide"
          swipe
        >
          {events.slice(0, 5).map((event) => (
            <Highlight key={event.id} event={event} />
          ))}
        </Carousel>
      )}
    </>
  );
};

export default HighlightsCarousel;

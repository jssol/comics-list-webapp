import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-material-ui-carousel';
import { FaChevronLeft, FaChevronRight, FaSpider } from 'react-icons/fa';
import Highlight from './Highlight';

const HighlightsCarousel = (props) => {
  const { events } = props;
  return (
    <>
      {events.length !== 0 && (
        <Carousel
          className="HighlightsCarousel w-full h-[38rem] relative overflow-hidden"
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
          indicatorContainerProps={{
            style: {
              position: 'absolute',
              bottom: '1rem',
              right: '2rem',
              textAlign: 'right',
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

HighlightsCarousel.propTypes = {
  events: PropTypes.arrayOf.isRequired,
};

export default HighlightsCarousel;

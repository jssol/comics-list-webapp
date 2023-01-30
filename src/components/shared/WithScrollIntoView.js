/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef } from 'react';

const WithScrollIntoView = (WrappedComponent) => {
  const ScrollIntoView = (props) => {
    const ref = useRef(null);

    useEffect(() => {
      const currentRef = ref.current;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting === false) {
            entry.target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });
      observer.observe(currentRef);

      return () => {
        observer.unobserve(currentRef);
      };
    }, []);

    return (
      <div ref={ref}>
        <WrappedComponent {...props} />
      </div>
    );
  };

  return ScrollIntoView;
};

export default WithScrollIntoView;

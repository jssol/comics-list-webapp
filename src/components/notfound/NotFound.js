import React from 'react';
import Link from '../shared/Link';
import image from '../../data/images/404.jpg';
import navLinks from '../../utils/navLinks';

const NotFound = () => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  };

  return (
    <>
      {image && (
        <section
          data-theme="light"
          style={styles}
          className="flex items-center bg-cover lg:bg-auto bg-top lg:bg-center justify-end lg:items-start lg:justify-end py-8 px-12 w-screen h-screen overflow-hidden NotFound"
        >
          <section className="flex flex-col items-end">
            <p className="text-5xl lg:text-6xl font-extrabold">
              Not found - Hydra stole our servers
            </p>
            <Link
              to={navLinks[0].to}
              className="w-32 h-12 flex ml-2 hover:shadow-xl mt-4 items-center justify-center px-4 py-2 bg-red-500 text-white uppercase skew-x-[-20deg] font-semibold"
            >
              <div className="skew-x-[20deg]">Go Home</div>
            </Link>
          </section>
        </section>
      )}
    </>
  );
};

export default NotFound;

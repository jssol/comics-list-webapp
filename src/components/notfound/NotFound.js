import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  const [path, setPath] = useState('');
  useEffect(() => {
    const options = ['groot', 'ironman', 'spiderman'];
    import(`../../data/images/${options[Math.floor(Math.random() * options.length)]}.jpg`)
      .then(({ default: path }) => {
        setPath(path);
      });
  }, []);

  const styles = {
    backgroundImage: `url(${path})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    color: 'white',
  };

  return (
    <>
      {path && (
        <section
          style={styles}
          className="flex items-start justify-end py-8 px-12 w-screen h-screen overflow-hidden NotFound"
        >
          <section className="flex flex-col items-end">
            <p className="text-6xl font-extrabold">
              Not found - Hydra stole our servers
            </p>
            <NavLink
              to="/"
              className="bg-white py-3 px-6 text-gray-800 skew-x-[-45deg] font-semibold"
            >
              Go Home
            </NavLink>
          </section>
        </section>
      )}
    </>
  );
};

export default NotFound;

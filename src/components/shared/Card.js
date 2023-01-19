import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AiFillLike } from 'react-icons/ai';

const Card = (props) => {
  const [liked, setLiked] = useState(false);

  const { comic } = props;
  const {
    id, title, thumbnail: { path, extension }, creators: { items },
  } = comic;

  useEffect(() => {
    if (localStorage.getItem('likedComics')) {
      const likedComics = JSON.parse(localStorage.getItem('likedComics'));
      if (likedComics.includes(id)) {
        setLiked(true);
      }
    }
  }, [setLiked, id]);

  const image = `${path}.${extension}`;

  const handleLike = () => {
    if (localStorage.getItem('likedComics')) {
      const likedComics = JSON.parse(localStorage.getItem('likedComics'));
      if (likedComics.includes(id)) {
        const filtered = likedComics.filter((comicId) => comicId !== id);
        localStorage.setItem('likedComics', JSON.stringify(filtered));
        setLiked(false);
      } else {
        localStorage.setItem('likedComics', JSON.stringify([...likedComics, id]));
        setLiked(true);
      }
    } else {
      localStorage.setItem('likedComics', JSON.stringify([id]));
      setLiked(true);
    }
  };

  return (
    <article className="flex flex-col h-full gap-2 auto-rows-max">
      <div className="aspect-[1/2] h-72 object-cover shadow-lg hover:translate-y-[-0.5rem] transition duration-300 shadow-gray-400">
        <img alt={title} src={image} className="w-full h-full" />
      </div>
      <div className="w-full flex flex-col justify-between items-start">
        <h3 className="font-bold text-lg">{title}</h3>
        <button
          type="button"
          className={
            liked
              ? 'text-red-500 flex items-center justify-center my-2 active:scale-75 transition duration-300'
              : 'text-gray-500 flex items-center justify-center my-2 active:scale-75  transition duration-300'
          }
          onClick={handleLike}
        >
          <AiFillLike />
        </button>
        <div className="text-sm flex gap-2">
          {items.slice(0, 2).map((creator) => (
            <p key={`Creator ${creator.name}`}>{creator.name}</p>
          ))}
        </div>
      </div>
    </article>
  );
};

Card.propTypes = {
  comic: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired,
    }).isRequired,
    creators: PropTypes.shape({
      items: PropTypes.arrayOf().isRequired,
    }).isRequired,
  }).isRequired,
};

export default Card;

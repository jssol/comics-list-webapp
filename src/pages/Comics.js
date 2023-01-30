import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DateTime } from 'luxon';
import Spinner from '../components/shared/Spinner';
import Title from '../components/shared/Title';
import Card from '../components/shared/Card';
import Error from '../components/shared/Error';
import { fetchComics } from '../redux/comics/comics';

const Comics = () => {
  const dispatch = useDispatch();
  const comicsState = useSelector((state) => state.comics);
  useEffect(() => {
    dispatch(fetchComics());
  }, [dispatch]);

  const { status, comics, error } = comicsState;
  return (
    <section className="w-full flex flex-col" data-theme="light">
      {status === 'loading' && <Spinner containerStyle={{ height: '38rem' }} />}
      {status === 'completed' && (
        <div className="w-10/12 lg:w-4/5 self-center">
          <Title>
            {DateTime.now().toFormat('MMMM dd')}
            {': '}
            New Releases
          </Title>
          <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 my-8 gap-6">
            {comics
              && comics.map((comic) => (
                <Card key={`Comic ${comic.id}`} comic={comic} />
              ))}
          </section>
        </div>
      )}
      {status === 'failed' && <Error error={error} />}
    </section>
  );
};

export default Comics;

import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../components/shared/Spinner';
import Title from '../components/shared/Title';
import Card from '../components/shared/Card';
import SearchBox from '../components/shared/SearchBox';
import { searchComics } from '../redux/comics/search';

const Search = () => {
  const searchState = useSelector((state) => state.search);

  const { status, comics, error } = searchState;
  return (
    <main className="w-full flex flex-col" data-theme="light">
      <SearchBox searchComics={searchComics} className="w-full" />
      <section>
        {status === 'loading' && (
          <Spinner containerStyle={{ height: '38rem' }} />
        )}
        {status === 'completed' && (
          <div className="w-10/12 lg:w-4/5 self-center">
            <Title>Search Results</Title>
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 my-8 gap-6">
              {comics
                && comics.map((comic) => (
                  <Card key={`Comic ${comic.id}`} comic={comic} />
                ))}
            </section>
          </div>
        )}
        {status === 'failed' && <div>{error}</div>}
      </section>
    </main>
  );
};

export default Search;

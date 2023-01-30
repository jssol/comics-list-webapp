import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../components/shared/Spinner';
import Title from '../components/shared/Title';
import Card from '../components/shared/Card';
import SearchBox from '../components/shared/SearchBox';
import Error from '../components/shared/Error';
import WithScrollIntoView from '../components/shared/WithScrollIntoView';
import { searchComics } from '../redux/comics/search';

const Search = () => {
  const searchState = useSelector((state) => state.search);

  const { status, comics, error } = searchState;
  return (
    <main className="w-full flex flex-col items-center" data-theme="light">
      <SearchBox
        searchComics={searchComics}
        className="w-9/12 flex lg:w-2/5 my-8 border border-gray-300"
      />
      <section className="w-full flex flex-col items-center overflow-hidden">
        {status === 'loading' && (
          <Spinner containerStyle={{ height: '38rem' }} />
        )}
        {status === 'completed' && (
          <div className="w-10/12 lg:w-4/5 self-center flex flex-col">
            <Title>Search Results</Title>
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 my-8 gap-6">
              {comics
                && comics.map((comic) => (
                  <Card key={`Comic ${comic.id}`} comic={comic} />
                ))}
            </section>
          </div>
        )}
        {status === 'failed' && <Error error={error} />}
        {status === 'idle' && (
          <div className="w-10/12 lg:w-4/5 h-[28rem] lg:h-[38rem] flex items-center justify-center p-5 text-gray-400">
            Type your search and the results will be displayed here.
          </div>
        )}
      </section>
    </main>
  );
};

export default WithScrollIntoView(Search);

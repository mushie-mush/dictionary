import { useState } from 'react';
import SearchBar from './components/SearchBar';
import type { IDictionaryEntry } from './types';
import DictionaryEntry from './components/DictionaryEntry';

function App() {
  const [searchResult, setSearchResult] = useState<IDictionaryEntry[]>([]);

  return (
    <>
      <header className="flex p-4 text-slate-500">
        <span className="text-md">Dictionary</span>
      </header>
      <main className="flex flex-col flex-auto justify-center w-full max-w-4xl mx-auto my-12 p-4">
        <section className="">
          <SearchBar setSearchResult={setSearchResult} />
        </section>
        <section className="flex flex-col py-6">
          {searchResult.map((item) => (
            <DictionaryEntry entry={item} key={item.id} />
          ))}
        </section>
      </main>
      <footer className="text-center p-4">
        <span className="text-sm text-slate-500">
          made using{' '}
          <a href="https://dictionaryapi.com/">Merriam-Webster API</a>
        </span>
      </footer>
    </>
  );
}

export default App;

import { Search } from 'lucide-react';
import { useState, type ChangeEvent, type FormEvent } from 'react';

function App() {
  const [keyword, setKeyword] = useState<string>('');

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <>
      <header className="flex p-4 text-slate-500">
        <span className="text-md">Dictionary</span>
      </header>
      <main className="flex flex-col flex-auto justify-center w-full max-w-4xl mx-auto my-12 p-4">
        <section className="">
          <form className="relative w-full" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              id="search"
              name="search"
              placeholder=" "
              className="peer w-full p-4 border-b-2 border-slate-300 text-4xl font-bold text-slate-700 placeholder-transparent focus:outline-none focus:border-slate-700"
              onChange={handleSearchInput}
              value={keyword}
            />
            <label
              htmlFor="search"
              className="absolute left-4 -top-6 text-slate-700 text-xl font-normal transition-all 
              peer-placeholder-shown:top-5 peer-placeholder-shown:text-3xl peer-placeholder-shown:font-bold
              peer-focus:-top-6 peer-focus:text-xl peer-focus:font-normal"
            >
              What word are you looking for?
            </label>
            <Search className="absolute top-5 right-4 size-8 text-slate-300 peer-focus:text-slate-700" />
          </form>
        </section>
        <section></section>
      </main>
      <footer className="text-center p-4">
        <span className="text-sm text-slate-500">made by marcello</span>
      </footer>
    </>
  );
}

export default App;

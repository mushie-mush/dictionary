import { LoaderCircle, Search } from 'lucide-react';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import type { IDictionaryEntry } from '../types';

interface ISearchBar {
  setSearchResult: (data: IDictionaryEntry[]) => void;
}

function SearchBar({ setSearchResult }: ISearchBar) {
  const [keyword, setKeyword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent) => {
    event.preventDefault();

    fetchSearchResult(keyword);
  };

  const fetchSearchResult = async (query: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
      );
      const data = await response.json();

      setSearchResult(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="relative w-full" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        id="search"
        name="search"
        placeholder=" "
        className="peer w-full p-4 border-b-2 border-slate-300 text-4xl font-bold text-slate-700 placeholder-transparent transition-all
        focus:outline-none focus:border-slate-700"
        onChange={handleSearchInput}
        value={keyword}
        autoComplete="off"
      />
      <label
        htmlFor="search"
        className="absolute left-4 -top-6 text-slate-700 text-xl font-normal pointer-events-none transition-all 
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-4xl peer-placeholder-shown:font-bold
              peer-focus:-top-6 peer-focus:text-xl peer-focus:font-normal"
      >
        What word are you looking for?
      </label>
      {isLoading ? (
        <LoaderCircle className="absolute top-5 right-4 size-8 text-slate-300 transition-all animate-spin peer-focus:text-slate-700" />
      ) : (
        <Search className="absolute top-5 right-4 size-8 text-slate-300 transition-all peer-focus:text-slate-700" />
      )}
    </form>
  );
}
export default SearchBar;

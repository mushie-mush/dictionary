import { LoaderCircle, Search } from 'lucide-react';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

interface ISearchBar {
  isLoading: boolean;
}

function SearchBar({ isLoading }: ISearchBar) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState<string>(
    () => searchParams.get('keyword') || ''
  );

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSearchParams({ keyword: keyword });
  };

  return (
    <form
      className="relative w-full pt-6"
      role="search"
      onSubmit={handleSearchSubmit}
    >
      <input
        type="text"
        id="search"
        name="search"
        placeholder=" "
        className="peer w-full py-4 px-6 border-b-2 border-slate-400 text-4xl font-bold text-slate-800 placeholder-transparent transition-all
        focus:outline-none focus:border-slate-800"
        onChange={handleSearchInput}
        value={keyword}
        autoComplete="off"
        aria-autocomplete="list"
        aria-controls="search-bar-autocomplete"
      />
      <label
        htmlFor="search"
        className="absolute left-6 top-1 text-slate-800 text-xl font-normal pointer-events-none transition-all 
              peer-placeholder-shown:top-10 peer-placeholder-shown:text-4xl peer-placeholder-shown:font-bold
              peer-focus:top-1 peer-focus:text-xl peer-focus:font-normal"
      >
        What <span className="text-orange-600">word</span> are you looking for?
      </label>
      {isLoading ? (
        <LoaderCircle
          data-testid="loading-icon"
          className="absolute top-10 right-6 size-8 text-slate-400 transition-all animate-spin peer-focus:text-slate-800"
        />
      ) : (
        <Search className="absolute top-10 right-6 size-8 text-slate-400 transition-all peer-focus:text-slate-800" />
      )}
    </form>
  );
}
export default SearchBar;

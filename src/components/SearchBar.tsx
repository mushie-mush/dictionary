import { LoaderCircle, Search } from 'lucide-react';
import { useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

interface ISearchBar {
  isLoading: boolean;
}

function SearchBar({ isLoading }: ISearchBar) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState<string>(
    () => searchParams.get('keyword') || ''
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent) => {
    event.preventDefault();
    inputRef.current?.blur();
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
        ref={inputRef}
        placeholder=" "
        className="peer w-full py-4 md:px-6 px-3 border-b-2 border-slate-400 text-4xl font-bold text-slate-800 placeholder-transparent transition-all
        focus:outline-none focus:border-slate-800"
        onChange={handleSearchInput}
        value={keyword}
        autoComplete="off"
        aria-autocomplete="list"
        aria-controls="search-bar-autocomplete"
      />
      <label
        htmlFor="search"
        className="hidden sm:inline absolute md:left-6 left-3 top-1 text-slate-800 text-xl font-normal pointer-events-none transition-all 
              peer-placeholder-shown:md:top-8 peer-placeholder-shown:md:text-5xl peer-placeholder-shown:text-3xl peer-placeholder-shown:top-12 peer-placeholder-shown:font-bold
              peer-focus:top-1 peer-focus:text-xl peer-focus:font-normal"
      >
        What <span className="text-orange-600">word</span> are you looking for?
      </label>
      <label
        htmlFor="search"
        className="inline sm:hidden absolute md:left-6 left-3 top-1 text-slate-800 text-xl font-normal pointer-events-none transition-all 
              peer-placeholder-shown:md:top-8 peer-placeholder-shown:lg:text-5xl peer-placeholder-shown:md:text-4xl peer-placeholder-shown:text-3xl peer-placeholder-shown:top-12 peer-placeholder-shown:font-bold
              peer-focus:top-1 peer-focus:text-xl peer-focus:font-normal"
      >
        Search for <span className="text-orange-600">word</span>
      </label>
      {isLoading ? (
        <LoaderCircle
          data-testid="loading-icon"
          className="absolute md:top-10 top-12 right-6 size-8 text-slate-400 transition-all animate-spin peer-focus:text-slate-800"
        />
      ) : (
        <Search className="absolute md:top-10 top-12 right-6 size-8 text-slate-400 transition-all peer-focus:text-slate-800" />
      )}
    </form>
  );
}
export default SearchBar;

import { LoaderCircle, Search } from 'lucide-react';
import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import type { IDictionaryEntry } from '../types';
import { fetchAutocomplete } from '../services/apiAutocomplete';
import { fetchDictionaryEntry } from '../services/apiDictionary';

interface ISearchBar {
  setSearchResult: (data: IDictionaryEntry[]) => void;
}

function SearchBar({ setSearchResult }: ISearchBar) {
  const [keyword, setKeyword] = useState<string>('');
  //   const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //   const [isLoadingSuggestions, setIsLoadingSuggestions] =
  //     useState<boolean>(false);

  //   useEffect(() => {
  //     const searchSuggestions = setTimeout(async () => {
  //       if (keyword.length < 2) {
  //         setSuggestions([]);
  //         return;
  //       }

  //       setIsLoadingSuggestions(true);
  //       const data = await fetchAutocomplete(keyword);
  //       setSuggestions(data);
  //       setIsLoadingSuggestions(false);
  //     }, 300);

  //     return () => {
  //       clearTimeout(searchSuggestions);
  //     };
  //   }, [keyword]);

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleSearchSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (keyword) {
      setIsLoading(true);
      const data = await fetchDictionaryEntry(keyword);
      setIsLoading(false);

      setSearchResult(data);
    }
  };

  //   const handleAutocompleteClick = async (word: string) => {
  //     setKeyword(word);
  //     setIsLoading(true);
  //     const data = await fetchDictionaryEntry(word);
  //     setIsLoading(false);
  //     setSearchResult(data);
  //     setSuggestions([]);
  //   };

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
        aria-autocomplete="list"
        aria-controls="search-bar-autocomplete"
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
      {/* <ul id="search-bar-autocomplete" className="p-4" role="listbox">
        {isLoadingSuggestions && suggestions.length === 0
          ? Array.from({ length: 5 }).map((_, idx) => (
              <div
                key={idx}
                className="h-5 w-full mb-3 bg-slate-300 animate-pulse"
              ></div>
            ))
          : suggestions.map((suggestion) => (
              <li
                key={suggestion}
                className="py-2 text-2xl text-slate-500 font-bold cursor-pointer hover:text-slate-700"
                onClick={() => handleAutocompleteClick(suggestion)}
                role="option"
              >
                {suggestion}
              </li>
            ))}
      </ul> */}
    </form>
  );
}
export default SearchBar;

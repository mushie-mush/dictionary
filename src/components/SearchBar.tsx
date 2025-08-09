import { LoaderCircle, Search } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import type { ISearchResult } from "../types";
import { fetchDictionaryEntry } from "../services/apiDictionary";

interface ISearchBar {
    setSearchResult: (data: ISearchResult) => void;
}

function SearchBar({ setSearchResult }: ISearchBar) {
    const [keyword, setKeyword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

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

    return (
        <form className="relative w-full" onSubmit={handleSearchSubmit}>
            <input
                type="text"
                id="search"
                name="search"
                placeholder=" "
                className="peer w-full py-4 px-6 border-b-2 border-slate-300 text-4xl font-bold text-slate-700 placeholder-transparent transition-all
        focus:outline-none focus:border-slate-700"
                onChange={handleSearchInput}
                value={keyword}
                autoComplete="off"
                aria-autocomplete="list"
                aria-controls="search-bar-autocomplete"
            />
            <label
                htmlFor="search"
                className="absolute left-6 -top-6 text-slate-700 text-xl font-normal pointer-events-none transition-all 
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-4xl peer-placeholder-shown:font-bold
              peer-focus:-top-6 peer-focus:text-xl peer-focus:font-normal"
            >
                What word are you looking for?
            </label>
            {isLoading ? (
                <LoaderCircle className="absolute top-5 right-6 size-8 text-slate-300 transition-all animate-spin peer-focus:text-slate-700" />
            ) : (
                <Search className="absolute top-5 right-6 size-8 text-slate-300 transition-all peer-focus:text-slate-700" />
            )}
        </form>
    );
}
export default SearchBar;

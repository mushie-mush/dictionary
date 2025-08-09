import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import DictionaryEntry from '../components/DictionaryEntry';
import { useSearchParams } from 'react-router-dom';
import { fetchDictionaryEntry } from '../services/apiDictionary';
import type { IDictionaryEntry } from '../types';

function Search() {
  const [dictionaryEntries, setDictionaryEntries] = useState<
    IDictionaryEntry[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchParams] = useSearchParams();

  const keyword = searchParams.get('keyword');

  useEffect(() => {
    if (keyword) {
      const fetchingTimeout = setTimeout(async () => {
        setIsLoading(true);

        const searchResults = await fetchDictionaryEntry(keyword);

        setIsLoading(false);
        setDictionaryEntries(searchResults);
      }, 500);

      return () => {
        clearTimeout(fetchingTimeout);
      };
    } else {
      setDictionaryEntries([]);
    }
  }, [keyword]);

  return (
    <>
      <section className="">
        <SearchBar isLoading={isLoading} />
      </section>
      <section className="flex flex-col transition-all">
        {dictionaryEntries.map((entry) => (
          <DictionaryEntry entry={entry} key={entry.id} />
        ))}
      </section>
    </>
  );
}
export default Search;

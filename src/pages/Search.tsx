import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import DictionaryEntry from '../components/DictionaryEntry';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
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
      <AnimatePresence>
        <motion.section
          layout
          className="bg-stone-200 flex flex-col flex-auto items-center justify-center pb-[64px] pt-[122px] px-6"
        >
          <motion.div layout className="w-full max-w-4xl">
            <SearchBar isLoading={isLoading} />
          </motion.div>
        </motion.section>
        {dictionaryEntries.length > 0 && (
          <motion.section
            layout
            className="w-full flex flex-col items-center justify-center p-6"
          >
            <div className="flex flex-col items-center justify-center gap-6 w-full max-w-4xl">
              {dictionaryEntries.map((entry) => (
                <DictionaryEntry entry={entry} key={entry.id} />
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
export default Search;

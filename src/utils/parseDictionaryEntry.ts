import type { IDictionaryEntry, ISearchEntry, ISearchResult } from '../types';

export const parseDictionaryEntry = (
  searchResult: ISearchResult
): IDictionaryEntry[] => {
  const entries = searchResult.entries.map((entry: ISearchEntry) => ({
    ...entry,
    id: searchResult.word + '-' + entry.partOfSpeech,
    word: searchResult.word,
  }));

  return entries;
};

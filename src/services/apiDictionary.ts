import type { IDictionaryEntry } from '../types';
import { parseDictionaryEntry } from '../utils/parseDictionaryEntry';

export const fetchDictionaryEntry = async (
  keyword: string
): Promise<IDictionaryEntry[]> => {
  const response = await fetch(
    `https://freedictionaryapi.com/api/v1/entries/en/${keyword.toLowerCase()}`
  );
  const data = await response.json();

  return parseDictionaryEntry(data);
};

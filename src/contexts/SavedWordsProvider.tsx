import { useEffect, useState, type ReactElement } from 'react';
import type { IDictionaryEntry } from '../types';
import { SavedWordsContext } from './SavedWordsContext';
import { loadLocalStorage, updateLocalStorage } from '../services/localStorage';

const LOCAL_STORAGE_KEY = 'SAVED_WORDS';

export function SavedWordsProvider({ children }: { children: ReactElement }) {
  const [savedWords, setSavedWords] = useState<IDictionaryEntry[]>([]);

  const totalSavedWords = savedWords.length;

  useEffect(() => {
    const localStorageData = loadLocalStorage(LOCAL_STORAGE_KEY);

    if (localStorageData.length) {
      setSavedWords(localStorageData);
    }
  }, []);

  useEffect(() => {
    updateLocalStorage(LOCAL_STORAGE_KEY, savedWords);
  }, [savedWords]);

  const addSavedWords = (entry: IDictionaryEntry) => {
    setSavedWords((currentEntries) => [...currentEntries, entry]);
  };

  const removeSavedWords = (id: string) => {
    setSavedWords((currentEntries) =>
      currentEntries.filter((entry) => entry.id !== id)
    );
  };

  const isWordSaved = (id: string) => {
    return savedWords.some((word) => word.id === id);
  };

  return (
    <SavedWordsContext
      value={{
        savedWords,
        totalSavedWords,
        addSavedWords,
        removeSavedWords,
        isWordSaved,
      }}
    >
      {children}
    </SavedWordsContext>
  );
}

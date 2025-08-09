import { useState, type ReactElement } from 'react';
import type { IDictionaryEntry } from '../types';
import { SavedWordsContext } from './SavedWordsContext';

export function SavedWordsProvider({ children }: { children: ReactElement }) {
  const [savedWords, setSavedWords] = useState<IDictionaryEntry[]>([]);

  const totalSavedWords = savedWords.length;

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

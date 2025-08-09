import { createContext } from 'react';
import type { IDictionaryEntry } from '../types';

interface ISavedWordsContext {
  savedWords: IDictionaryEntry[];
  totalSavedWords: number;
  addSavedWords: (entry: IDictionaryEntry) => void;
  removeSavedWords: (id: string) => void;
  isWordSaved: (id: string) => boolean;
}

export const SavedWordsContext = createContext<ISavedWordsContext>(
  {} as ISavedWordsContext
);

import { useContext } from 'react';
import { SavedWordsContext } from '../contexts/SavedWordsContext';

export function useSavedWords() {
  const context = useContext(SavedWordsContext);

  if (context === undefined) {
    throw new Error(
      'SavedWordsContext was used outside of the SavedWordsProvider'
    );
  }

  return context;
}

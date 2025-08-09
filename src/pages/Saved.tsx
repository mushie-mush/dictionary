import DictionaryEntry from '../components/DictionaryEntry';
import { useSavedWords } from '../hooks/useSavedWords';

function Saved() {
  const { savedWords } = useSavedWords();

  return (
    <>
      <h1 className="text-slate-700 text-4xl font-bold">Saved Words</h1>
      <div>
        {savedWords.map((entry) => (
          <DictionaryEntry entry={entry} />
        ))}
      </div>
    </>
  );
}
export default Saved;

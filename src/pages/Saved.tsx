import DictionaryEntry from '../components/DictionaryEntry';
import { useSavedWords } from '../hooks/useSavedWords';

function Saved() {
  const { savedWords } = useSavedWords();

  return (
    <>
      <section className="bg-stone-200 flex flex-col items-center justify-center pb-[64px] pt-[122px]">
        <h1 className="text-slate-800 text-4xl font-bold w-full max-w-4xl">
          Saved Words
        </h1>
      </section>
      <section className="w-full flex flex-col items-center justify-center p-6">
        <div className="flex flex-col items-center justify-center gap-6 w-full max-w-4xl">
          {savedWords.map((entry) => (
            <DictionaryEntry entry={entry} key={entry.id} />
          ))}
        </div>
      </section>
    </>
  );
}
export default Saved;

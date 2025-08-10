import { BookmarkCheck, BookmarkPlus } from 'lucide-react';
import type { IDictionaryEntry } from '../types';
import { useSavedWords } from '../hooks/useSavedWords';

interface IDictionaryEntryProps {
  entry: IDictionaryEntry;
}

function DictionaryEntry({ entry }: IDictionaryEntryProps) {
  const { addSavedWords, removeSavedWords, isWordSaved } = useSavedWords();

  const handleWordSave = () => {
    if (isWordSaved(entry.id)) {
      removeSavedWords(entry.id);
    } else {
      addSavedWords(entry);
    }
  };

  return (
    <div className="flex flex-col gap-6 p-6 w-full border-y-2 border-y-transparent hover:shadow-xl hover:border-y-slate-800 hover:scale-101 transition-all">
      <div className="text-4xl font-bold text-slate-800 flex items-center gap-2">
        <h2>{entry.word}</h2>
        <span className="text-base text-orange-600 bg-orange-100 px-2 py-1 rounded">
          {entry.language.code}
        </span>
        <span className="italic text-slate-500 text-lg font-medium">
          · {entry.partOfSpeech}
        </span>
        <button
          className={`ml-auto text-slate-300 size-12 flex items-center justify-center rounded-md cursor-pointer ${
            isWordSaved(entry.id)
              ? 'hover:text-orange-600 hover:bg-orange-50'
              : 'hover:text-slate-800 hover:bg-slate-100'
          }`}
          onClick={handleWordSave}
        >
          {isWordSaved(entry.id) ? (
            <BookmarkCheck className="size-10 text-orange-600" />
          ) : (
            <BookmarkPlus className="size-10" />
          )}
        </button>
      </div>

      {entry.pronunciations.length > 0 && (
        <section>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            Pronunciations
          </h3>
          <ul className="list-disc list-inside ml-4">
            {entry.pronunciations.map((pronouncation, index) => (
              <li key={index} className="text-slate-600 mb-1">
                {pronouncation.text}
                {pronouncation.tags.length > 0 && (
                  <em className="text-xs text-slate-400 ml-2">
                    ({pronouncation.tags.join(', ')})
                  </em>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {entry.forms.length > 0 && (
        <section>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">Forms</h3>
          <ul className="list-disc list-inside ml-4">
            {entry.forms.map((form, index) => (
              <li key={index} className="text-slate-600 mb-1">
                {form.word}
                {form.tags.length > 0 && (
                  <em className="text-xs text-slate-400 ml-2">
                    ({form.tags.join(', ')})
                  </em>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {entry.senses.length > 0 && (
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-3">Senses</h3>
          <div>
            {entry.senses.map((sense, index) => (
              <details
                key={index}
                className="p-4 border-2 border-slate-200 rounded-md not-last:mb-6"
              >
                <summary className="cursor-pointer font-semibold text-slate-700">
                  <span className="font-semibold text-slate-700">
                    : {sense.definition}
                  </span>
                  {sense.tags.length > 0 && (
                    <em className="text-xs text-slate-400 ml-2">
                      ({sense.tags.join(', ')})
                    </em>
                  )}
                </summary>
                <div className="flex flex-col gap-4 mt-4">
                  {sense.examples.length > 0 && (
                    <div>
                      <span className="font-semibold text-slate-700">
                        Examples:
                      </span>
                      <ul className="list-disc list-inside ml-4">
                        {sense.examples.map((ex, i) => (
                          <li key={i} className="text-slate-600">
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {sense.quotes.length > 0 && (
                    <div>
                      <span className="font-semibold text-slate-700">
                        Quotes:
                      </span>
                      <ul className="list-disc list-inside ml-4">
                        {sense.quotes.map((q, i) => (
                          <li key={i} className="text-slate-600">
                            <span className="italic text-slate-700">
                              "{q.text}"
                            </span>{' '}
                            <em className="text-xs text-slate-400">
                              - {q.reference}
                            </em>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {sense.synonyms.length > 0 && (
                    <div>
                      <span className="font-semibold text-slate-700">
                        Synonyms:{' '}
                      </span>
                      <span className="text-slate-700">
                        {sense.synonyms.join(', ')}
                      </span>
                    </div>
                  )}
                  {sense.antonyms.length > 0 && (
                    <div className="mb-2">
                      <span className="font-semibold text-slate-700">
                        Antonyms:{' '}
                      </span>
                      <span className="text-slate-700">
                        {sense.antonyms.join(', ')}
                      </span>
                    </div>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
export default DictionaryEntry;

import { Volume2 } from 'lucide-react';
import type { IDictionaryEntry } from '../types';

interface IDictionaryEntryProps {
  entry: IDictionaryEntry;
}

function DictionaryEntry({ entry }: IDictionaryEntryProps) {
  const handleAudioPlay = (url: string | undefined) => {
    if (url) {
      new Audio(url).play();
    }
  };

  return (
    <div
      key={entry.id}
      className="p-6 bg-white not-last:border-b-2 border-slate-300"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold text-slate-700">{entry.word}</h2>
        {entry.audioUrl && (
          <Volume2
            className="text-xl text-slate-500 mr-auto ml-3 cursor-pointer hover:text-slate-700"
            onClick={() => handleAudioPlay(entry.audioUrl)}
          />
        )}
        {entry.pronunciation && (
          <span className="text-slate-500">/{entry.pronunciation}/</span>
        )}
      </div>

      <div className="mb-4">
        <span className="text-slate-600 italic">{entry.partOfSpeech}</span>
        {entry.isOffensive && (
          <span className="ml-2 text-red-500 text-sm">(offensive term)</span>
        )}
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2 text-slate-700">
          Definitions:
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          {entry.definitions.map((def, index) => (
            <li key={index}>
              <p className="text-slate-700">{def.text}</p>
              {def.example && (
                <p className="text-slate-500 italic mt-1">
                  Example: "{def.example}"
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>

      {entry.synonyms && entry.synonyms.length > 0 && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-slate-700">
            Synonyms:
          </h3>
          <div className="flex flex-wrap gap-2">
            {entry.synonyms.map((synonym, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-slate-100 rounded-full text-slate-600 text-sm"
              >
                {synonym}
              </span>
            ))}
          </div>
        </div>
      )}

      {entry.stems && entry.stems.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-700">
            Related forms:
          </h3>
          <div className="flex flex-wrap gap-2">
            {entry.stems.map((stem, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-slate-100 rounded-full text-slate-600 text-sm"
              >
                {stem}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default DictionaryEntry;

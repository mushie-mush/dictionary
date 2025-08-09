import type { IDictionaryEntry } from "../types";

interface IDictionaryEntryProps {
    entry: IDictionaryEntry;
    word: string;
}

function DictionaryEntry({ entry, word }: IDictionaryEntryProps) {
    return (
        <div className="p-8 not-last:mb-8 bg-slate-50 shadow-md">
            <h2 className="text-3xl font-bold text-slate-700 mb-4 flex items-center gap-2">
                <span>{word}</span>
                <span className="text-base text-slate-500 bg-slate-100 px-2 py-1 rounded">{entry.language.code}</span>
                <span className="italic text-slate-500 text-lg font-medium">· {entry.partOfSpeech}</span>
            </h2>

            {entry.pronunciations.length > 0 && (
                <section className="mb-6">
                    <h3 className="text-xl font-semibold text-slate-700 mb-2">Pronunciations</h3>
                    <ul className="list-disc list-inside ml-4">
                        {entry.pronunciations.map((pronouncation, index) => (
                            <li key={index} className="text-slate-600 mb-1">
                                {pronouncation.text}
                                {pronouncation.tags.length > 0 && (
                                    <em className="text-xs text-slate-400 ml-2">({pronouncation.tags.join(", ")})</em>
                                )}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {entry.forms.length > 0 && (
                <section className="mb-6">
                    <h3 className="text-xl font-semibold text-slate-700 mb-2">Forms</h3>
                    <ul className="list-disc list-inside ml-4">
                        {entry.forms.map((form, index) => (
                            <li key={index} className="text-slate-600 mb-1">
                                {form.word}
                                {form.tags.length > 0 && (
                                    <em className="text-xs text-slate-400 ml-2">({form.tags.join(", ")})</em>
                                )}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {entry.senses.length > 0 && (
                <section className="mb-6">
                    <h3 className="text-xl font-bold text-slate-700 mb-3">Senses</h3>
                    <div>
                        {entry.senses.map((sense, index) => (
                            <details key={index} className="bg-white p-4 not-last:mb-6">
                                <summary className="cursor-pointer font-semibold text-slate-700">
                                    <span className="font-semibold text-slate-700">: {sense.definition}</span>
                                    {sense.tags.length > 0 && (
                                        <em className="text-xs text-slate-400 ml-2">({sense.tags.join(", ")})</em>
                                    )}
                                </summary>
                                <div className="mt-2">
                                    {sense.examples.length > 0 && (
                                        <div className="mb-2">
                                            <span className="font-semibold text-slate-700">Examples:</span>
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
                                        <div className="mb-2">
                                            <span className="font-semibold text-slate-700">Quotes:</span>
                                            <ul className="list-disc list-inside ml-4">
                                                {sense.quotes.map((q, i) => (
                                                    <li key={i} className="text-slate-600">
                                                        <span className="italic text-slate-700">"{q.text}"</span>{" "}
                                                        <em className="text-xs text-slate-400">- {q.reference}</em>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {sense.synonyms.length > 0 && (
                                        <div className="mb-2">
                                            <span className="font-semibold text-slate-700">Synonyms: </span>
                                            <span className="text-slate-700">{sense.synonyms.join(", ")}</span>
                                        </div>
                                    )}
                                    {sense.antonyms.length > 0 && (
                                        <div className="mb-2">
                                            <span className="font-semibold text-slate-700">Antonyms: </span>
                                            <span className="text-slate-700">{sense.antonyms.join(", ")}</span>
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

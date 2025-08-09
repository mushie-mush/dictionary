import { useState } from "react";
import SearchBar from "./components/SearchBar";
import type { ISearchResult } from "./types";
import DictionaryEntry from "./components/DictionaryEntry";

function App() {
    const [searchResult, setSearchResult] = useState<ISearchResult>();

    console.log("searchResult", searchResult);

    return (
        <>
            <header className="flex p-4 text-slate-500">
                <span className="text-md">Dictionary</span>
            </header>
            <main className="flex flex-col flex-auto justify-center w-full max-w-4xl mx-auto my-12 p-4">
                <section className="">
                    <SearchBar setSearchResult={setSearchResult} />
                </section>
                <section className="flex flex-col py-6 transition-all">
                    {searchResult?.entries.map((entry) => (
                        <DictionaryEntry
                            entry={entry}
                            word={searchResult.word}
                            key={`${searchResult.word}-${entry.partOfSpeech}`}
                        />
                    ))}
                </section>
            </main>
            <footer className="text-center p-4">
                <span className="text-sm text-slate-500">
                    made using <a href="https://freedictionaryapi.com/">Free Dictionary API</a>
                </span>
            </footer>
        </>
    );
}

export default App;

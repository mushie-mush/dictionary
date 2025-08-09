export interface ISearchResult {
    word: string;
    entries: IDictionaryEntry[];
    source: {
        url: string;
        license: {
            name: string;
            url: string;
        };
    };
}

export interface IDictionaryEntry {
    language: ILanguage;
    partOfSpeech: string;
    pronunciations: IPronunciation[];
    forms: IWordForm[];
    senses: ISense[];
    synonyms: string[];
    antonyms: string[];
}

interface IPronunciation {
    type: string;
    text: string;
    tags: string[];
}

interface IWordForm {
    word: string;
    tags: string[];
}

interface ISense {
    definition: string;
    tags: string[];
    examples: string[];
    quotes: IQuote[];
    synonyms: string[];
    antonyms: string[];
    translations?: ITranslation[];
    subsenses?: ISense[];
}

interface IQuote {
    text: string;
    reference: string;
}

interface ITranslation {
    language: ILanguage;
    word: string;
}

interface ILanguage {
    code: string;
    name: string;
}

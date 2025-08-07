export interface IDictionaryEntry {
  word: string;
  phonetics: IPhonetic[];
  meanings: IMeaning[];
}

export interface IPhonetic {
  text?: string;
  audio?: string;
}

export interface IMeaning {
  partOfSpeech: string;
  definitions: IDefinition[];
}

export interface IDefinition {
  definition: string;
  example?: string;
  synonyms?: string[];
  antonyms?: string[];
}

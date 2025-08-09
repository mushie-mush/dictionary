export interface IDictionaryEntry {
  id: string;
  word: string;
  pronunciation?: string;
  audioUrl?: string;
  partOfSpeech: string;
  definitions: IDefinition[];
  stems?: string[];
  synonyms?: string[];
  isOffensive?: boolean;
}

export interface IDefinition {
  text: string;
  example?: string;
}

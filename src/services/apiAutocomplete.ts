interface IDatamuseObject {
  word: string;
  score: number;
}

export const fetchAutocomplete = async (keyword: string): Promise<string[]> => {
  const response = await fetch(
    `https://api.datamuse.com/sug?s=${keyword}&max=5`
  );
  const data = await response.json();

  return data
    .map(({ word }: IDatamuseObject) => word)
    .filter((word: string) => /^[a-zA-Z]+$/.test(word));
};

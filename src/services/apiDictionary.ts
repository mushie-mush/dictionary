import { parseMWResponse } from '../utils/parseMWData';

export const fetchDictionaryEntry = async (keyword: string) => {
  const response = await fetch(
    `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${keyword}?key=${
      import.meta.env.VITE_MW_API_KEY
    }`
  );
  const data = await response.json();

  return data.map((entry: unknown) => parseMWResponse(entry));
};

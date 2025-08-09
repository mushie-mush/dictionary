import type { ISearchResult } from "../types";

export const fetchDictionaryEntry = async (keyword: string): Promise<ISearchResult> => {
    const response = await fetch(`https://freedictionaryapi.com/api/v1/entries/en/${keyword}`);
    const data = await response.json();

    return data;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const loadLocalStorage = (key: string) => {
  const dataString = localStorage.getItem(key) || '';

  if (dataString) {
    const data = JSON.parse(dataString);

    return data;
  }

  return [];
};

export const updateLocalStorage = (key: string, data: any) => {
  const stringifiedData = JSON.stringify(data);

  localStorage.setItem(key, stringifiedData);
};

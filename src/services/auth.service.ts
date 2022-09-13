export const baseUrl = "https://rickandmortyapi.com/api/";

const characterUrl = baseUrl + "character/";

export const getCharacter = () => {
  return fetch(`${characterUrl}2`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => {
      throw new Error(err);
    });
};

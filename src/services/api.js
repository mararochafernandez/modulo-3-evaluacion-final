const getDataFromApi = () => {
  //`http://hp-api.herokuapp.com/api/characters/house/${house}`
  return fetch('http://hp-api.herokuapp.com/api/characters')
    .then((response) => response.json())
    .then((characters) =>
      characters.map((character, index) => {
        return {
          id: index,
          name: character.name,
          house: character.house,
          image: character.image,
          species: character.species,
          alive: character.alive,
          gender: character.gender,
          alternate_names: character.alternate_names,
        };
      })
    );
};

export default getDataFromApi;

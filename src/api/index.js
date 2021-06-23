import createHeroApi from "./marvelHeroes";

export default ({ axios }) => {
  return {
    heroApi: createHeroApi({ axios }),
  };
};

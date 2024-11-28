import {
  APIBASEURL, POKEMON,
} from '../data/Constants';

const pokeApi = async <T> (pokeId:string | undefined):Promise<T> => {
  let uri:string = '';

  uri = `${APIBASEURL}${POKEMON}/${pokeId}`;

  const res = await fetch(uri);
  return res.json();
};

export default pokeApi;

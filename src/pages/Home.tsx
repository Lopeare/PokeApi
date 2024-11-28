import { pokemonList, Pokemon } from '../data/PokeData';
import { PokeSearch, PokeTable } from '../components';

function Home():React.JSX.Element {
  const pokeData:Pokemon[] = pokemonList;

  return (
    <>
      <PokeSearch />
      <p className="fs-1">Tipical Pokemon</p>
      <PokeTable pokemonList={pokeData} />
    </>
  );
}

export default Home;

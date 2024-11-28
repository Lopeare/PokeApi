import { Pokemon } from 'data/PokeData';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface PokeTableProps {
  pokemonList: Pokemon[]; // Array de objetos tipo Pokemon
}

function PokeTable({ pokemonList }: PokeTableProps):React.JSX.Element {
  return (
    <ul>
      {
        pokemonList.map((pokemon) => <NavLink key={pokemon.id} as={Link} to={`/details/${pokemon.id}`}>{pokemon.name}</NavLink>)
      }
    </ul>
  );
}

export default PokeTable;

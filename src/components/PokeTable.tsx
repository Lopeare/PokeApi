import { Pokemon } from 'data/PokeData';
import { NavLink, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface PokeTableProps {
  pokemonList: Pokemon[]; // Array de objetos tipo Pokemon
}

function PokeTable({ pokemonList }: PokeTableProps):React.JSX.Element {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {pokemonList.map((pokemon) => (
          <tr key={pokemon.id}>
            <td>{pokemon.id}</td>
            <td><NavLink key={pokemon.id} as={Link} to={`/details/${pokemon.id}`}>{pokemon.name}</NavLink></td>

          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default PokeTable;

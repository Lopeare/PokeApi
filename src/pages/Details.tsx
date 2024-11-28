import { useParams } from 'react-router-dom';
import { PokeDetails, PokeSearch } from '../components';

function Details():React.JSX.Element {
  const { id } = useParams();
  const pokeId:string = id ?? '';
  return (
    <>
      <PokeSearch />
      <p className="fs-1">Details Page for pokemon selected</p>
      <PokeDetails pokeID={pokeId} />
    </>
  );
}

export default Details;

/* eslint-disable react/jsx-no-useless-fragment */
import { useEffect, useState } from 'react';
import {
  Dropdown, DropdownButton, Image, InputGroup,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import getPokemon from '../slices/pokeApiThunk';
import { HG, XHG, WEIGHTS } from '../data/Constants';

interface PokeDetailsProps {
  pokeID:string; // Array de objetos tipo Pokemon
}

function PokeDetails({ pokeID }:PokeDetailsProps):React.JSX.Element {
  const dispatch = useDispatch();

  const { isEmpty, isLoading, pokemon } = useSelector((state) => state.api);
  // Current weight string --> Hg
  const [weightType, setWeightType] = useState(HG);
  // Current weight modifier --> 1
  const [weightMod, setWeightMod] = useState(XHG);

  // Doing the search
  useEffect(() => {
    dispatch(getPokemon(pokeID));
  }, [pokeID]);

  // Each time the dropdown is selected, The new weight modifier is calculated
  const onDropDown = (newWeighType) => {
    setWeightType(newWeighType);
    const { mod } = WEIGHTS.find(({ type }) => type === newWeighType);
    setWeightMod(mod);
  };

  return (
    <>
      {
        isLoading && (<p>cargando</p>)
      }
      {
        !isLoading && isEmpty && (<p>Molaría que hubiese un pokemon llamado así.</p>)
      }
      {!isLoading
      && !isEmpty && (
      <>
        <p className="fs-3">
          Nombre:
          {` ${pokemon.name}`}
        </p>
        <p className="fs-3">
          Pokedex Id:
          {` ${pokemon.id}`}
        </p>
        <InputGroup className="py-4">
          <p className="fs-3 me-1">
            Peso:
            {Number(` ${pokemon.weight}` * weightMod).toFixed(2) }
          </p>
          <DropdownButton id="dropdown-basic-button" className="ms-1 pb-8" size="sm-1" onSelect={onDropDown} title={weightType}>
            {WEIGHTS.map((weight) => (
              <Dropdown.Item key={weight.type} eventKey={weight.type}>
                {weight.type}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </InputGroup>
        <p className="fs-3">
          Foto Frontal
        </p>
        <Image fluid alt="Imagen del pokemon" width="50%" src={pokemon.img} />
      </>
      )}
    </>
  );
}

export default PokeDetails;

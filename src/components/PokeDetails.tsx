/* eslint-disable react/jsx-no-useless-fragment */
import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import getPokemon from '../slices/pokeApiThunk';

interface PokeDetailsProps {
  pokeID:string; // Array de objetos tipo Pokemon
}

function PokeDetails({ pokeID }:PokeDetailsProps):React.JSX.Element {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { isEmpty, isLoading, pokemon } = useSelector((state) => state.api);

  useEffect(() => {
    dispatch(getPokemon(pokeID));
  }, [pokeID]);

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
        <p className="fs-3">
          Peso:
          {` ${pokemon.weight}`}
        </p>
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

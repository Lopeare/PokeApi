import {
  Button, Form, InputGroup,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function PokeSearch():React.JSX.Element {
  const navigate = useNavigate();
  // inputValue is the value for doing the search (pokeName || pokeID)
  const [inputValue, setInputValue] = useState('');

  const onChange = ({ target }) => {
    setInputValue(target.value);
  };

  // For each pokemon selected, navigate to component <PokeDetails id=inputValue>
  const onSubmit = (event:Event):void => {
    event.preventDefault();
    navigate(`/details/${inputValue}`);
  };

  return (
    <form onSubmit={onSubmit} className="py-4">
      <InputGroup>
        <Form.Control
          type="text"
          id="inputSearch"
          placeholder="Enter a pokemon name or ID"
          aria-describedby="searchHelpBlock"
          onChange={onChange}
          value={inputValue}
        />
        <Button
          variant="success"
          onClick={onSubmit}
        >
          <i className=" bi-search">Search</i>
        </Button>
      </InputGroup>
    </form>
  );
}

export default PokeSearch;

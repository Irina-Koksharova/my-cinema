import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import IconButton from 'components/IconButton';
import {
  FormStyled,
  LabelStyled,
  InputStyled,
  ContainerButtonStyled
} from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmitForm = e => {
    e.preventDefault();
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <FormStyled onSubmit={handleSubmitForm}>
      <LabelStyled>
        <InputStyled
          value={searchQuery}
          onChange={e => {
            setSearchQuery(e.target.value);
          }}
        ></InputStyled>
      </LabelStyled>
      <ContainerButtonStyled>
        <IconButton>
          <FiSearch size={'1.5em'} color={'rgb(248, 100, 14)'} />
        </IconButton>
      </ContainerButtonStyled>
    </FormStyled>
  );
};

export default SearchBar;

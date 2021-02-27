import { useState, useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import { breakpoints } from 'styles/variables';
import { sizeContext } from 'context/size/SizeContextProvider';
import {
  FormStyled,
  LabelStyled,
  InputStyled,
  ContainerButtonStyled
} from './SearchBar.styled';
import IconButton from 'components/IconButton';
import Button from 'components/Button';

const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { width } = useContext(sizeContext);

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
      {width < breakpoints.main.decktop 
        ? <ContainerButtonStyled>
          <IconButton>
            <FiSearch size={'1.5em'} color={'rgb(248, 100, 14)'} />
          </IconButton>
        </ContainerButtonStyled>
        : <Button>
          Search
          <FiSearch size={'1.2em'} color={'rgb(255, 255, 255)'} />
        </Button>}
    </FormStyled>
  );
};
  
export default SearchBar;

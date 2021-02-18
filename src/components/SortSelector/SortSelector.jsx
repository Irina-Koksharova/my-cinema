import SelectorStyled from './SortSelector.styled';

const SortSelector = ({ options, onChange, value }) => {
  return (
    <SelectorStyled value={value} onChange={onChange}>
      {options.map(option => (
        <option key={option}>{option}</option>
      ))}
    </SelectorStyled>
  );
};

export default SortSelector;

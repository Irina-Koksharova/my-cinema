import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { ContainerStyled } from './SortSelector.styled';

const useStyles = makeStyles((theme) => ({
    root: {
    width: '100%',
    height: '100%',
    margin: 0,
    marginTop: 10,
    "& .MuiInputBase-root": {
      width: '100%',
      height: '100%',
      color: 'inherit',
      borderRadius: 8,
    },
    "& .MuiOutlinedInput-input": {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      padding: 0,
      paddingLeft: 5,
      backgroundColor: 'white'
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: '2px solid rgb(248, 100, 14)',
    }
  }
}));

const SortSelector = ({ options, onChange, value }) => {
  const classes = useStyles();
   
  return (
    <ContainerStyled>
      <FormControl variant="outlined" className={classes.root}>
      <Select
        value={value}
        onChange={onChange}
      >
        {options.map(option => (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl> 
    </ContainerStyled>  
  );
}
  
export default SortSelector;

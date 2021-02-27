import { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { sizeContext } from 'context/size/SizeContextProvider';
import { breakpoints } from 'styles/variables';

const PaginationEl = ({ count, page, onChange }) => {
  const { width } = useContext(sizeContext)

  const setValue = (vw, min, mean, max) => {
    let size;
    if (vw < breakpoints.secondary.mobile) {
      size = min
    } else if (vw >= breakpoints.secondary.mobile && vw < breakpoints.main.tablet) {
      size = mean
    } else {
      size = max
    }
    return size
  }
  
  const useStyles = makeStyles(theme => ({
  element: {
    display: 'flex',
    justifyContent: 'center'
    },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: setValue(width, 20, 30, 50),
    height: setValue(width, 30, 35, 50),
    margin: 2,
    color: 'rgb(85, 83, 83)',
    fontSize: setValue(width, 12, 16, 16),
  },
  selected: {
    border: '2px solid rgb(248, 100, 14)',
    borderRadius: 8,
    color: 'white',
    background: 'linear-gradient(45deg, #f8640e 30%, #f8640e 90%)',
  },
}));
  
  const classes = useStyles();
 
  const onHandlePageChange = (e, value) => {
    onChange(value);
  };

  return (
    <Pagination
      count={count}
      page={page}
      defaultPage={1}
      boundaryCount={1}
      showFirstButton={width < breakpoints.main.tablet ? false : true}
      showLastButton={width < breakpoints.main.tablet ? false : true}
      onChange={onHandlePageChange}
      shape="rounded"
      classes={{ root: classes.element }}
      renderItem={item => (
        <PaginationItem
          {...item}
          classes={{ root: classes.item, selected: classes.selected }}
        />
      )}
    />
  );
};

export default PaginationEl;

import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { MdArrowUpward } from 'react-icons/md';
import { fetchReviews } from 'services/apiMovies';
import { scrollToElement, scrollTop } from 'services/scroll';
import { noReviews, serverError} from 'services/notification/notification';
import {
  ContainerStyled,
  ButtonStyled,
  ListStyled,
  titleStyle,
  buttonSwitchStyle,
  buttonStyle
} from './Reviews.styled';
import Spinner from 'components/Spinner';
import Notification from '../../components/Notification';
import Button from 'components/Button';
import Title from 'components/Title';
import ReviewsCard from 'components/ReviewsCard';
import IconButton from 'components/IconButton';

const Reviews = ({ sectionTitle, movie }) => {
  const [reviewsLength, setReviewsLength] = useState(null);
  const [buttonName, setButtonName] = useState('Show more');
  const history = useHistory();
  const location = useLocation();
  const { title, id } = movie;

  const getPath = value => {
    return value
      ? location.pathname.slice(1, 6)
      : location.pathname.slice(1, 3);
  };

  const { isLoading, isError, isSuccess, data } = useQuery(
    ['reviews', getPath(title), id],
    () => fetchReviews(getPath(title), id),
  );

  useEffect(() => {
    if (isSuccess) {
      scrollToElement('button')
    }
  }, [isSuccess]);
  
  useEffect(() => {
    if (data) {
      
      const content = data.results
        .map(({ author, content }) => author + content)
        .join('').length;
      setReviewsLength(content);
    }
  }, [data]);
  
  const onButtonSwitchClick = e => {
    switch (buttonName) {
      case 'Show more':
        e.target.previousSibling.style.display = 'inline-block';
        setButtonName('Hide');
        scrollToElement('button');
        break;
      case 'Hide':
        e.target.previousSibling.style.display = '-webkit-box';
        setButtonName('Show more');
        scrollToElement('button');
        break;
      default:
        return;
    }
  };

  const onButtonGoBackClick = () => {
    history.push(location?.state?.from?.location ?? '/');
    scrollTop()
  };

  return (
    <>
      {isLoading && <Spinner />}
      
      {isError && <Notification message={serverError} />}
       
      {isSuccess && (
        <ContainerStyled>

          <Button id={'button'} style={buttonStyle} onClick={onButtonGoBackClick}>
                {`<< back to "${movie.title || movie.name}"`}
              </Button>

          {reviewsLength === 0 && (
            <Notification message={noReviews} />
          )}
          
          {reviewsLength > 2500 && (
            <>
              <Title style={titleStyle} title={`${sectionTitle} of "${movie.title || movie.name}"`} movie={movie} />

              <ListStyled>
                {data.results.map(({ id, author, content }) => (
                  <li key={id}>
                    <ReviewsCard author={author} content={content} />
                  </li>
                ))}
              </ListStyled>
              
              <Button style={buttonSwitchStyle} onClick={onButtonSwitchClick}>{buttonName}</Button>
              <Button style={buttonStyle} onClick={onButtonGoBackClick}>
                {`<< back to "${movie.title || movie.name}"`}
              </Button>  
              
              <ButtonStyled>
                <IconButton
                  aria-label='Вверх'
                  onClick={scrollTop}
                >
                  <MdArrowUpward size={'2em'} color={'rgb(248, 100, 14)'} />
                </IconButton>
              </ButtonStyled>
            </>
          )}
                              
        </ContainerStyled>
      )}
    </>
  )
};

export default Reviews;
import { useState, useEffect } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { useQuery } from 'react-query';
import { MdArrowUpward } from 'react-icons/md';
import { fetchReviews } from 'services/apiMovies';
import { scrollTo, scrollElement } from 'services/scroll';
import {
  noReviews,
  showNotification,
  serverError,
} from 'services/notification/notification';
import {ContainerStyled, ButtonStyled, ListStyled, titleStyle, buttonStyle } from './Reviews.styled';
import Spinner from 'components/Spinner';
import Notification from '../../components/Notification';
import Button from 'components/Button';
import Title from 'components/Title';
import ReviewsCard from 'components/ReviewsCard';
import IconButton from 'components/IconButton';

const Reviews = ({ sectionTitle, movie }) => {
  const [reviewsLength, setReviewsLength] = useState(null);
  // const [buttonName, setButtonName] = useState('Show more');
  const history = useHistory();
  const location = useLocation();
  // const { url } = useRouteMatch();
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
    if (data) {
      scrollElement('button')
      const content = data.results
        .map(({ author, content }) => author + content)
        .join('').length;
      if (content === 0) {
        showNotification(noReviews);
        history.push(location?.state?.from?.location ?? '/');
      } else {
        setReviewsLength(content);
      }
    }
  }, [data, history, location?.state?.from?.location]);
  
  // const onButtonClick = e => {
  //   switch (buttonName) {
  //     case 'Show more':
  //       e.target.previousSibling.style.display = 'inline-block';
  //       setButtonName('Hide');
  //       scrollElement(movie.id);
  //       break;
  //     case 'Hide':
  //       e.target.previousSibling.style.display = '-webkit-box';
  //       setButtonName('Show more');
  //       scrollElement(movie.id);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  const onButtonGoBackClick = () => {
    history.push(location?.state?.from?.location ?? '/');
    scrollTo()
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
                   
          <Title style={titleStyle} title={`${sectionTitle} of "${title}"`} movie={movie} />

          <ListStyled>
            {data.results.map(({ id, author, content }) => (
              <li key={id}>
                <ReviewsCard author={author} content={content} />
              </li>
            ))}
          </ListStyled>

           <ButtonStyled>
           <IconButton
             aria-label='Вверх'
             onClick={scrollTo}
           >
             <MdArrowUpward size={'2em'} color={'rgb(248, 100, 14)'} />
           </IconButton>
         </ButtonStyled>

        </ContainerStyled>
      )}
    </>
  )
  
  // if (isLoading) return <Spinner />;
  // if (isError) return <Notification message={serverError} />;
//   if (isSuccess) {
//     return (
    //   <Section style={{ padding: '25px 0px 0px', textAlign: 'center' }}>
    //     {data.results.length > 0 && (
    //       <>
    //         <TitleEditionalInfo title={sectionTitle} movie={movie} />
    //         <ul className={s.container}>
    //           {data.results.map(({ id, author, content }) => (
    //             <li key={id}>
    //               <ReviewsCard author={author} content={content} />
    //             </li>
    //           ))}
    //         </ul>
    //         {reviewsLength > 2000 && (
    //           <ButtonSmall name={buttonName} onClick={onButtonClick} />
    //         )}
    //         <div className={s.buttonContainer}>
    //           <ButtonGoBack
    //             name={`<< back to ${getButtonName()}`}
    //             onClick={onButtonGoBackClick}
    //           />
    //         </div>
    //       </>
    //     )}
    //   </Section>
    // );
//   }
};

export default Reviews;
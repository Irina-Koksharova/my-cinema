import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { MdArrowUpward } from 'react-icons/md';
import { fetchCast } from 'services/apiMovies';
import { scrollTo, scrollElement } from 'services/scroll';
import { serverError } from 'services/notification/notification';
import {
  ContainerStyled,
  ListStyled,
  ListItemStyled,
  ButtonStyled,
  titleStyle,
  buttonStyle
} from './Cast.styled';
import Spinner from 'components/Spinner';
import Notification from '../../components/Notification';
import Button from 'components/Button';
import Title from 'components/Title';
import ActorCard from 'components/ActorCard';
import IconButton from 'components/IconButton';

const Cast = ({ sectionTitle, movie }) => {
  const history = useHistory();
  const location = useLocation();
  const { title, id } = movie;

  const getPath = value => {
    return value
      ? location.pathname.slice(1, 6)
      : location.pathname.slice(1, 3);
  };

  const { isLoading, isError, isSuccess, data } = useQuery(
    ['cast', getPath(title), id],
    () => fetchCast(getPath(title), id),
  );

  useEffect(() => {
    if (isSuccess) {
      scrollElement('button')
    }
  }, [isSuccess]);

  const onButtonGoBackClick = () => {
    history.push(location?.state?.from?.location ?? '/');
    scrollTo()
  };

   return (
    <>
      {isLoading && <Spinner />}
      
      {isError && <Notification message={serverError} />}
       
      {isSuccess && 
         <ContainerStyled>
         
         <Button id={'button'} style={buttonStyle} onClick={onButtonGoBackClick}>
           {`<< back to "${movie.title || movie.name}"`}
         </Button>
         
         <Title style={titleStyle} title={`${sectionTitle} of "${title}"`} movie={movie} />
         <ListStyled>
           {data.cast.map(({ id, profile_path, original_name, character }) => (
             <ListItemStyled key={id}>
               <ActorCard
                 image={profile_path}
                 name={original_name}
                 character={character}
               />
             </ListItemStyled>
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
       }
     </>
  )
};

export default Cast;
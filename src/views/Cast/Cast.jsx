import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { MdArrowUpward } from 'react-icons/md';
import { fetchCast } from 'services/apiMovies';
import { scrollToElement, scrollTop } from 'services/scroll';
import { noCast, serverError } from 'initialValues/messages';
import {
  ContainerStyled,
  ListStyled,
  ListItemStyled,
  ButtonStyled,
  titleStyle,
  buttonSwitchStyle,
  buttonStyle
} from './Cast.styled';
import Spinner from 'components/Spinner';
import Notification from 'components/Notification';
import Button from 'components/Button';
import Title from 'components/Title';
import ActorCard from 'components/ActorCard';
import IconButton from 'components/IconButton';

const Cast = ({ sectionTitle, movie }) => {
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
    ['cast', getPath(title), id],
    () => fetchCast(getPath(title), id),
  );

  useEffect(() => {
    if (isSuccess) {
      scrollToElement('button')
    }
  }, [isSuccess]);

  const onButtonSwitchClick = e => {
    switch (buttonName) {
      case 'Show more':
        e.target.previousSibling.style.overflow = 'visible';
        e.target.previousSibling.style.maxHeight = '100%';
        setButtonName('Hide');
        scrollToElement('button');
        break;
      case 'Hide':
        e.target.previousSibling.style.overflow = 'hidden';
        e.target.previousSibling.style.maxHeight = '600px';
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
       
      {isSuccess && 
         <ContainerStyled>
         
         <Button id='button' style={buttonStyle} onClick={onButtonGoBackClick}>
           {`<< back to "${movie.title || movie.name}"`}
         </Button>

         {data.cast.length === 0
           ? <Notification message={noCast} />  
           : <>
             <Title style={titleStyle} title={`${sectionTitle} of "${movie.title || movie.name}"`} movie={movie} />
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
             {data.cast.length > 10 && (
               <>
               <Button style={buttonSwitchStyle} onClick={onButtonSwitchClick}>{buttonName}</Button>

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
           </>
         }

         </ContainerStyled>
       }
     </>
  )
};

export default Cast;
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import ButtonOpenModal from 'components/ButtonOpenModal/ButtonOpenModal';
import CarDescription from 'components/CarDescription/CarDescription';
import { fetchCarById } from 'redux/cars/carsOperations';
import { addFavorite, removeFavorite } from 'redux/favorite/favoriteSlice';
import { selectFavorite } from 'redux/favorite/favoriteSelectors';
import {
  Details,
  Icon,
  IconFavorite,
  IconWrapper,
  Image,
  ImageWrapper,
  Separator,
  Span,
  TitleWrapper,
  Wrapper,
} from './CarItem.styled';
import PropTypes from 'prop-types';

const CarItem = ({ car }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
  } = car;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { favoriteCars } = useSelector(selectFavorite);
  const dispatch = useDispatch();
  const companyAddress = address.split(',');
  const country = companyAddress[2];
  const city = companyAddress[1];

  useEffect(() => {
    if (favoriteCars.some(favCar => favCar.id === car.id)) {
      setIsFavorite(true);
    }
  }, [favoriteCars, car]);

  const openModal = () => {
    setIsModalOpen(true);
    dispatch(fetchCarById(car.id));
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleToFavorite = e => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);

    if (favoriteCars.some(favCar => favCar.id === car.id)) {
      dispatch(removeFavorite(car));
    } else {
      dispatch(addFavorite(car));
    }
  };

  return (
    <Wrapper>
      <ImageWrapper onClick={openModal}>
        <IconWrapper onClick={handleToFavorite}>
          {isFavorite ? (
            <IconFavorite width={20} height={20} />
          ) : (
            <Icon width={20} height={20} />
          )}
        </IconWrapper>
        <Image src={img} alt={model} width="274" height="268" />
      </ImageWrapper>
      <TitleWrapper>
        <p>
          {make} <Span>{model}</Span>, {year}
        </p>
        <p>{rentalPrice}</p>
      </TitleWrapper>
      <Details>
        {city} <Separator> | </Separator>
        {country} <Separator> | </Separator> {rentalCompany}
      </Details>
      <Details>
        {type} <Separator> | </Separator> {model} <Separator> | </Separator>{' '}
        {id}
        <Separator> | </Separator> {functionalities[0]}
      </Details>
      <ButtonOpenModal car={car} onClick={openModal} />
      <AnimatePresence>
        {isModalOpen && (
          <CarDescription
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            car={car}
          />
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

CarItem.propTypes = {
  car: PropTypes.object,
};

export default CarItem;

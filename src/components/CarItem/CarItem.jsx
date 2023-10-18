import ButtonOpenModal from 'components/ButtonOpenModal/ButtonOpenModal';
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
import { useState } from 'react';
// import Modal from 'components/Modal/Modal';
import { useDispatch } from 'react-redux';
import { fetchCarById } from 'redux/cars/carsOperations';
import CarDescription from 'components/CarDescription/CarDescription';
import { addFavorite, removeFavorite } from 'redux/favorite/favoriteSlice';
// import { BiHeart } from 'react-icons/bi';

const CarItem = ({ car }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    // description,
    // fuelConsumption,
    // engineSize,
    // accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    // rentalConditions,
    // mileage,
  } = car;
  // console.log(car);
  //   console.log(car.car)
  //   let companyAddress;
  //   if (car) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
    const newCar = dispatch(fetchCarById(car.id));
    console.log(newCar);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const companyAddress = address.split(',');
  const country = companyAddress[2];
  const city = companyAddress[1];

  const handleToFavorite = e => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);

    if (isFavorite) {
      dispatch(removeFavorite(car));
    } else {
      dispatch(addFavorite(car));
    }
  };
  //   }

  return (
    <Wrapper>
      <ImageWrapper onClick={openModal}>
        <IconWrapper onClick={handleToFavorite}>
          {isFavorite ? (
            <IconFavorite width={18} height={18} />
          ) : (
            <Icon width={18} height={18} />
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
      {isModalOpen && (
        <CarDescription
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          car={car}
        />
      )}
    </Wrapper>
  );
};

export default CarItem;

import ButtonRentalCar from 'components/ButtonRentalCar/ButtonRentalCar';
import Modal from '../Modal/Modal';
import {
  Image,
  ModalContent,
  TitleWrapper,
  Span,
  Description,
  DetailsWrapper,
  Details,
  DetailItem,
  DescWrapper,
  DescTitle,
  Conditions,
  ConditionItem,
  Button,
} from './CarDescription.styled';
import { formatNumberWithCommas } from 'helpers/formatNumberWithCommas';

const CarDescription = ({ isModalOpen, closeModal, car }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  } = car;

  const companyAddress = address.split(',');
  const country = companyAddress[2];
  const city = companyAddress[1];
  const conditions = rentalConditions.split('\n');
  const minAge = conditions[0].split(' ');
  const age = minAge[2];
  const textMinAge = minAge.splice(0, 2).join(' ');
  const mileageFormat = formatNumberWithCommas(mileage);

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <ModalContent>
        <Image src={img} alt={model} width="461" height="248" />
        <TitleWrapper>
          {make} <Span>{model}</Span>, {year}
        </TitleWrapper>
        <DetailsWrapper>
          <Details>
            <DetailItem>{city}</DetailItem>
            <DetailItem>{country}</DetailItem>
            <DetailItem>id: {id}</DetailItem>
            <DetailItem>Year: {year}</DetailItem>
            <DetailItem>Type: {type}</DetailItem>
          </Details>
          <Details>
            <DetailItem>Fuel Consumption: {fuelConsumption}</DetailItem>
            <DetailItem>EngineSize: {engineSize}</DetailItem>
          </Details>
        </DetailsWrapper>
        <Description>{description}</Description>
        <DescWrapper>
          <DescTitle>Accessories and functionalities:</DescTitle>
          <Details>
            {accessories.map((acces, idx) => (
              <DetailItem key={idx}>{acces}</DetailItem>
            ))}
          </Details>
          <Details>
            {functionalities.map((func, idx) => (
              <DetailItem key={idx}>{func}</DetailItem>
            ))}
          </Details>
        </DescWrapper>
        <DescWrapper>
          <DescTitle>Rental Conditions: </DescTitle>
          <Conditions>
            <ConditionItem>
              {textMinAge} <Span>{age}</Span>
            </ConditionItem>
            <ConditionItem>{conditions[1]}</ConditionItem>
            <ConditionItem>{conditions[2]}</ConditionItem>
            <ConditionItem>
              Mileage: <Span>{mileageFormat}</Span>
            </ConditionItem>
            <ConditionItem>
              Price: <Span>{rentalPrice.slice(1)}$</Span>
            </ConditionItem>
          </Conditions>
        </DescWrapper>
        <ButtonRentalCar text="Rental Car" />
        {/* <Button to="tel:+380730000000">Rental car</Button> */}
      </ModalContent>
    </Modal>
  );
};

export default CarDescription;

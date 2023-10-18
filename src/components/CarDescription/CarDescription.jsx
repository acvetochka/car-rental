import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import { Image, ModalContent } from './CarDescription.styled';

const CarDescription = ({ isModalOpen, closeModal, car }) => {
  const {
    // id,
    // year,
    // make,
    model,
    // type,
    img,
    description,
    // fuelConsumption,
    // engineSize,
    // accessories,
    // functionalities,
    // rentalPrice,
    // rentalCompany,
    // address,
    // rentalConditions,
    // mileage,
  } = car;
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <ModalContent>
        <Image src={img} alt={model} width="461" height="248" />
        <p>{description}</p>
        <Link to="tel:+380730000000">Rental car</Link>
      </ModalContent>
    </Modal>
  );
};

export default CarDescription;

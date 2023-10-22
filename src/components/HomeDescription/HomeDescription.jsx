import fon from 'assets/fon.png';
import ButtonRentalCar from 'components/ButtonRentalCar/ButtonRentalCar';
import LinkToCatalog from 'components/LinkToCatalog/LinkToCatalog';
import { Text, TextWrapper, Image } from './HomeDescription.styled';

const HomeDescription = () => {
  return (
    <>
      <Text>
        Are you looking for a car for travel or work? Our service is ready to
        provide you with the best selection of vehicles for your needs.
      </Text>
      <TextWrapper>
        <Text>
          Let your journey be comfortable and unforgettable with our rental
          service. Start your journey with us today!
        </Text>
        <LinkToCatalog text="Get started" />
      </TextWrapper>
      <TextWrapper>
        <Text>
          Indecisive about your choice? Don't worry! Our experienced experts are
          here to help you make the right decision. Whether you're uncertain
          about the type of car you need, the rental duration, or any other
          questions, our team is ready to provide expert guidance to ensure your
          satisfaction.
        </Text>
        <ButtonRentalCar text="Contact us" />
      </TextWrapper>
      <Image src={fon} alt="five cars" width="100%" />
    </>
  );
};

export default HomeDescription;

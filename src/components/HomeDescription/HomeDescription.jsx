import fon from 'assets/fon.png';
import car from 'assets/car.png';
import ButtonRentalCar from 'components/ButtonRentalCar/ButtonRentalCar';
import LinkToCatalog from 'components/LinkToCatalog/LinkToCatalog';
import { Text, TextWrapper, Image } from './HomeDescription.styled';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const HomeDescription = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });
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
      {isMobile && (
        <motion.div
          initial={{ opacity: 0, x: 100, overflow: 'hidden' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.15 }}
          viewport={{ once: true }}
          // , amount: 0.2
        >
          <Image src={car} alt="car" width="440" height="209" />
        </motion.div>
      )}
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
      {!isMobile && (
        //   <motion.div
        //     initial={{ opacity: 0, x: 100, overflow: 'hidden' }}
        //     whileInView={{ opacity: 1, x: 0 }}
        //     transition={{ duration: 1.15 }}
        //     viewport={{ once: true }}
        //     // , amount: 0.2
        //   >
        //     <Image src={car} alt="car" width="100%" />
        //   </motion.div>
        // ) : (
        <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.15 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image src={fon} alt="five cars" width="100%" />
        </motion.div>
      )}
    </>
  );
};

export default HomeDescription;

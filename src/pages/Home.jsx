import HomeDescription from 'components/HomeDescription/HomeDescription';
import Section from 'components/Section/Section';
import Title from 'components/Title/Title';

const Home = () => {
  return (
    <Section>
      <Title title="Welcome to our Car Rental Service!" />
      <HomeDescription />
    </Section>
  );
};

export default Home;

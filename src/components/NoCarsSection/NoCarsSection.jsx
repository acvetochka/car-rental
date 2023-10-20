import {Section, Button } from './NoCarsSection.styled';

const NoCarsSection = () => {
  return (
    <Section>
      <p>
        "Oops, there's nothing here. Go to the catalog to add cars to your
        favorites.
      </p>
      <Button to="/catalog">Catalog</Button>
    </Section>
  );
};

export default NoCarsSection;

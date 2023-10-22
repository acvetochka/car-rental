import LinkToCatalog from 'components/LinkToCatalog/LinkToCatalog';
import Section from 'components/Section/Section';
import car from 'assets/romeo.png';

const NoCarsSection = () => {
  return (
    <Section>
      <p>
        "Oops, there's nothing here. Go to the catalog to add cars to your
        favorites.
      </p>
      <img src={car} alt="Romeo" />
      <LinkToCatalog text="Catalog" />
    </Section>
  );
};

export default NoCarsSection;

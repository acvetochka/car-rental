import PropTypes from 'prop-types';

import CarItem from 'components/CarItem/CarItem';
import { List, ListItem } from './CarsList.styled';

const CarsList = ({ carsArray }) => {
  return (
    <List>
      {carsArray.map(item => (
        <ListItem key={item.id}>
          <CarItem car={item} />
        </ListItem>
      ))}
    </List>
  );
};

CarsList.propTypes = {
  carsArray: PropTypes.array.isRequired,
};

export default CarsList;

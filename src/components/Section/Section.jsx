import PropTypes from 'prop-types';

import { SectionStyle } from './Section.styled';

const Section = ({ children }) => {
  return <SectionStyle>{children}</SectionStyle>;
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;

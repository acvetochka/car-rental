const { SectionStyle } = require('./Section.styled');

const Section = ({ children }) => {
  return <SectionStyle>{children}</SectionStyle>;
};

export default Section;

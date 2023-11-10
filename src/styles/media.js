const media = {
  mobile: 375,
  tablet: 768,
  desktop: 1440,
};

const { mobile, tablet, desktop } = media;

const min = bp => `@media screen and (min-width: ${bp}px)`;
const max = bp => `@media screen and (max-width: ${bp}px)`;
const between = (bp1, bp2) =>
  `@media screen and (min-width: ${bp1}px) and (max-width: ${bp2}px)`;

export { mobile, tablet, desktop, min, max, between };

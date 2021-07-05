import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ className, children }) => (
  <section className={className}>
    <div className="container">{children}</div>
  </section>
);

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.object]).isRequired,
};

Section.defaultProps = {
  className: '',
};

export default Section;

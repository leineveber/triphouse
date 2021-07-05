import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../Button';

import './Spoiler.styles.scss';

const Spoiler = ({ className, buttonText, buttonClassName, children }) => {
  const [isOpened, setOpened] = useState(false);

  const handleClickSpoiler = useCallback(() => {
    setOpened(!isOpened);
  });

  return (
    <div className={`${className} spoiler`}>
      <Button className={buttonClassName} text={buttonText} onClick={handleClickSpoiler} />
      <div className={classNames('spoiler__bar', { 'spoiler__bar--active': isOpened })}>
        {children}
      </div>
    </div>
  );
};

Spoiler.propTypes = {
  className: PropTypes.string,
  buttonText: PropTypes.oneOfType([PropTypes.element, PropTypes.object, PropTypes.string]),
  buttonClassName: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
};

Spoiler.defaultProps = {
  className: '',
  buttonText: '',
  buttonClassName: '',
};

export default Spoiler;

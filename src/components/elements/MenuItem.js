import React from 'react';
import PropTypes from 'prop-types';
import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MenuItem = ({ href, title, ...rest }) => {
  return <NavItem
    href={href}
    to={href}
    componentClass={Link}
    {...rest}
  >
    { title }
    </NavItem>;

};

MenuItem.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
};

export default MenuItem;
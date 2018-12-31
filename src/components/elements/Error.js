import React from 'react';

const Error = (props) => {
  return <p className='error'>
    {props.children}
  </p>;
};

export default Error;
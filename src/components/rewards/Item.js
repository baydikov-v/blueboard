import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
  const { data } = props;

  return <tr>
    <td>{data.id}</td>
    <td>{data.user.name}</td>
    <td>{data.experience}</td>
    <td>{data.date}</td>
    <td>
      <Link to={`/reward/${data.id}`}>edit</Link>
    </td>
  </tr>;
};

export default Item;
import React, { memo } from 'react';
import _ from 'lodash';
import Item from './Item';
import { Table } from 'react-bootstrap';

const ItemMemo = memo(Item);

const List = (props) => {
  const { rewards } = props;

  return  <div className='rewards'>
    {_.size(rewards)
      ? <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Experience</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {
          _.map(rewards, item => <ItemMemo
            key={`reward_${item.id}`}
            data={item}
          />)
        }
        </tbody>
      </Table>
      : ''
    }
  </div>;
};

export default List;
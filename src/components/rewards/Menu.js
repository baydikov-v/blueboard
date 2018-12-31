import React from 'react';
import { Nav } from 'react-bootstrap';
import MenuItem from "../elements/MenuItem";

const Menu = (props) => {
  return <Nav
    bsStyle="tabs"
    activeKey={props.status}
    onSelect={key => props.onSelect(key)}
  >
    <MenuItem eventKey='' href='/rewards' title='All'/>
    <MenuItem eventKey='new' href='/rewards/new' title='New'/>
    <MenuItem eventKey='redeemed' href='/rewards/redeemed' title='Redeemed'/>
    <MenuItem eventKey='completed' href='/rewards/completed' title='Completed'/>
    <MenuItem eventKey='scheduled' href='/rewards/scheduled' title='Scheduled'/>
  </Nav>;

};

export default Menu;
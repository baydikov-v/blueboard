import React, { Component } from 'react';
import _ from 'lodash';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { isRequired } from '../../../services/validation';
import Error from '../../elements/Error';

class RewardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isInvalid: false,
      errors: {},
      values: {
        ...props.initValues,
        date: new Date(props.initValues.date)
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      values: {
        ...this.state.values,
        [name]: value
      }
    }, () => this.validateField(name, value));
  }

  handleDateChange(value) {
    this.setState({
      values: {
        ...this.state.values,
        date: value
      }
    }, () => this.validateField('date', value));
  }

  validateField(name, value) {
    const { errors } = this.state;
    if (['experience', 'status', 'date'].indexOf(name) !== -1) {
      errors[name] = isRequired(value) ? null : 'Can\'t be blank';
    }
    const isInvalid = _.some(errors, error => !!error);
    this.setState({
      errors,
      isInvalid,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit({
      ...this.state.values,
      date: moment(this.state.values.date).format('MM/DD/YYYY')
    });
  }

  render () {
    const { errors, isInvalid } = this.state;
    const { experience, status, date } = this.state.values;

    return <Form
      className='rewards-edit'
      onSubmit={this.handleSubmit}>
      <FormGroup>
        <ControlLabel>Experience</ControlLabel>
        <FormControl
          type="text"
          name='experience'
          placeholder="Search query"
          className='query-inp'
          value={experience}
          onChange={this.handleChange}
        />
        {errors.experience ? <Error>{errors.experience}</Error> : ''}
      </FormGroup>
      <FormGroup controlId="formControlsSelect">
        <ControlLabel>Status</ControlLabel>
        <FormControl
          componentClass="select"
          placeholder="select"
          name='status'
          value={status}
          onChange={this.handleChange}
        >
          <option value="">select</option>
          <option value="new">New</option>
          <option value="redeemed">Redeemed</option>
          <option value="completed">Completed</option>
          <option value="scheduled">Scheduled</option>
        </FormControl>
        {errors.status ? <Error>{errors.status}</Error> : ''}
      </FormGroup>
      <FormGroup>
        <ControlLabel>Date</ControlLabel>
        <div>
          <DatePicker
            name='date'
            selected={date}
            onChange={this.handleDateChange}
          />
          {errors.date ? <Error>{errors.date}</Error> : ''}
        </div>
      </FormGroup>
      <Button
        type="submit"
        bsStyle="primary"
        disabled={isInvalid}
      >
        Save
      </Button>
    </Form>;
  }
}

export default RewardForm;
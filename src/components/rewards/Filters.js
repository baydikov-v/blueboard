import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { setQuery, setSorting, resetFilters } from '../../actions/filters';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleQueryChange(e) {
    e.preventDefault();
    this.props.setQuery(e.target.value);
  }

  handleSortChange(e) {
    this.props.setSorting(e.target.value);
  }

  render() {
    const { query, sort, sortDir } = this.props.filters;
    return <div className='filters'>
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup>
          <FormControl
            type="text"
            placeholder="Search query"
            className='query-inp'
            value={query}
            onChange={this.handleQueryChange}
          />
        </FormGroup>{' '}
        <FormGroup>
          <FormControl
            componentClass="select"
            placeholder="Sort By"
            className='sort-inp'
            value={`${sort}_${sortDir}`}
            onChange={this.handleSortChange}
          >
            <option value="date_desc">Newest</option>
            <option value="date_asc">Oldest</option>
          </FormControl>
        </FormGroup>{' '}
        <FormGroup>
          <Button
            bsSize="xsmall"
            bsStyle="danger"
            onClick={this.props.resetFilters}
          >
            Clear filters
          </Button>
        </FormGroup>
      </Form>
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

Filters.propTypes = {
  setQuery: PropTypes.func,
  setSorting: PropTypes.func,
  resetFilters: PropTypes.func,
};

export default connect(mapStateToProps, {
  setQuery,
  setSorting,
  resetFilters,
})(Filters);
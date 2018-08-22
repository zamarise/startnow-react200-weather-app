import React from 'react';

import { searchCitySubmit } from './searchAction';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleCityButton(e) {
    const { dispatch } = this.props;

    dispatch(searchCitySubmit(e.target.value));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch(searchCitySubmit(this.state.name));
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <div className='btn-group' role='group' aria-label='Basic example'>
          <button
            type='button'
            className='btn btn-primary'
            name='name'
            value='San Diego'
            onClick={ this.handleChange }
          >
            San Diego
          </button>
          <button
            type='button'
            className='btn btn-primary'
            name='name'
            value='New York'
            onClick={ this.handleChange }
          >
            New York
          </button>
          <button
            type='button'
            className='btn btn-primary'
            name='name'
            value='Washington, D.C'
            onClick={ this.handleChange }
          >
            Washington D.C
          </button>
          <button
            type='button'
            className='btn btn-primary'
            name='name'
            value='London'
            onClick={ this.handleChange }
          >
            London
          </button>
          <button
            type='button'
            className='btn btn-primary'
            name='name'
            value='Tokyo'
            onClick={ this.handleChange }
          >
            Tokyo
          </button>
        </div>

        <div className='input-group mb-3'>
          <input
            type='text'
            name='name'
            className='form-control'
            placeholder='Click on a city above, or input a city here, and click go!'
            aria-label='City Name'
            aria-describedby='basic-addon2'
            value={ this.state.name }
            onChange={ this.handleChange }
          />

          <div className='input-group-append'>
            <button className='btn btn-outline-secondary' type='button' onClick={ this.handleSubmit }>
              Go!
            </button>
          </div>
        </div>
      </form>
    );
  }
}

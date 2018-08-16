import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1 className='display-4'>Origin Weather Application</h1>
          <p className='lead'>{"Always know if you'll need an umbrella"}</p>
        </div>
        <form onSubmit={ this.handleSubmit }>
          <div className='btn-group' role='group' aria-label='Basic example'>
            <button type='button' className='btn btn-primary'>
              San Diego
            </button>
            <button type='button' className='btn btn-primary'>
              New York
            </button>
            <button type='button' className='btn btn-primary'>
              Washington DC
            </button>
            <button type='button' className='btn btn-primary'>
              London
            </button>
            <button type='button' className='btn btn-primary'>
              Tokyo
            </button>
          </div>

          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Click on a city above, or input a city here, and click go!'
              aria-label='City Name'
              aria-describedby='basic-addon2'
            />
            <div className='input-group-append'>
              <button className='btn btn-outline-secondary' type='button'>
                Go!
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

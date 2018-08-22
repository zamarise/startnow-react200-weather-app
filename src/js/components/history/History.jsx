import React from 'react';

import { historyCity } from './historyAction';

export default class Information extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div className='card bg-light mb-3'>
        <div className='card-header alert-primary'>Search History</div>
        <div className='card-body'>
          <h5 className='card-title' />
          <p className='card-text'>
            <ul>{this.props.history.map(obj => <li key={ Math.random() }>{obj.name}</li>)}</ul>
          </p>
        </div>
      </div>
    );
  }
}

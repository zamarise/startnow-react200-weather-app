import React from 'react';
export default class Information extends React.Component {
  render() {
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

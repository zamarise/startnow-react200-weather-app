import React from 'react';

// import Search from './components/search';

export default class Information extends React.Component {
  render() {
    return (
      <div className='card bg-light mb-3'>
        <div className='card-header alert-primary'>City Information</div>
        <div className='card-body'>
          <h5 className='card-title'>{this.props.information.name}</h5>
          <p className='card-text'>{JSON.stringify(this.props.information, null, 2)}</p>
        </div>
      </div>
    );
  }
}

// populate all information from state.search.selected into info component

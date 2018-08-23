import React from 'react';
import { randomBytes } from 'crypto';

export default class Information extends React.Component {
  render() {
    return (
      <div className='card bg-light mb-3'>
        <div className='card-header alert-primary'>Search History</div>
        <div className='card-body'>
          <table className='table table-striped'>
            <thead>
              <tr>{/* <th>Name</th>
                <th>Timestamp</th> */}</tr>
            </thead>
            <tbody>
              {this.props.history.map((item, index) => (
                <tr key={ index }>
                  <td>{item.name}</td>
                  <td>{new Date(item.dt * 1000).toLocaleString('en-US', { hour12: false })}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

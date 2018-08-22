import React from 'react';

export default class Information extends React.Component {
  render() {
    return (
      <div className='card bg-light mb-3'>
        <div className='card-header alert-primary'>Search History</div>
        <div className='card-body'>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {this.props.history.map(item => (
                <tr key={ item.id }>
                  <td>{item.name}</td>
                  <td>{Date(item.dt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

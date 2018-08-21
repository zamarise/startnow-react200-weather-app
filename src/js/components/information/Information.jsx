import React from 'react';

export default class Information extends React.Component {
  render() {
    const { information } = this.props;
    return (
      <div className='card bg-light mb-3'>
        <div className='card-header alert-primary'>City Information</div>
        <div className='card-body'>
          <h2 className='card-title'>{information.name}</h2>
          <p className='card-text'>
            {information.name ? `Lat/Long: ${information.coord.lat}, ${information.coord.lon}` : ''}
          </p>
          <hr />
          <ul className='list-unstyled'>
            <li>{information.name ? `Temperature: ${information.main.temp} °F` : ''}</li>
            <li>{information.name ? `Lowest Temperature: ${information.main.temp_min} °F` : ''}</li>
            <li>
              {information.name ? `Highest Temperature: ${information.main.temp_max} °F` : ''}
            </li>
            <li>{information.name ? `Pressure: ${information.main.pressure}` : ''}</li>
            <li>{information.name ? `Humidity: ${information.main.humidity} %` : ''}</li>
            <li>{information.name ? `Wind Speed: ${information.wind.speed} mph` : ''}</li>
            {/* <p className='card-text'>{JSON.stringify(this.props.information, null, 2)}</p> */}
          </ul>
        </div>
      </div>
    );
  }
}

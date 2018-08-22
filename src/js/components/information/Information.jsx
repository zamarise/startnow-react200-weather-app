import React from 'react';

export default class Information extends React.Component {
  render() {
    const { information } = this.props;
    return (
      <div className='card bg-light mb-3'>
        <div className='card-header alert-primary'>City Information</div>
        <div className='card-body'>
          <div className='row text-center'>
            <div className='col-sm-12' style={ { margin: '0 auto' } }>
              <div className='media d-flex'>
                {information.name && (
                  <img
                    alt='Weather icon'
                    className='d-flex justify-content-center'
                    src={ `http://openweathermap.org/img/w/${information.weather[0].icon}.png` }
                  />
                )}
                <div className='media-body text-center center-block'>
                  <h2 className='mt-0'>{information.name}</h2>

                  <p className='mb-0'>
                    {information.name
                      ? `Lat/Long: ${information.coord.lat}, ${information.coord.lon}`
                      : ''}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div className='row text-center'>
            <div className='col-sm-4'>
              {information.name && (
                <p>
                  Temperature: <span className='text-success'>{information.main.temp} °F</span>
                </p>
              )}
            </div>
            <div className='col-sm-4'>
              {information.name ? `Lowest Temperature: ${information.main.temp_min} °F` : ''}
            </div>
            <div className='col-sm-4'>
              {information.name ? `Highest Temperature: ${information.main.temp_max} °F` : ''}
            </div>
          </div>

          <div className='row text-center'>
            <div className='col-sm-4'>
              {information.name ? `Pressure: ${information.main.pressure}` : ''}
            </div>
            <div className='col-sm-4'>
              {information.name ? `Humidity: ${information.main.humidity} %` : ''}
            </div>
            <div className='col-sm-4'>
              {information.name ? `Wind Speed: ${information.wind.speed} mph` : ''}
            </div>
            {/* <p className='card-text'>{JSON.stringify(this.props.information, null, 2)}</p> */}
          </div>
        </div>
      </div>
    );
  }
}

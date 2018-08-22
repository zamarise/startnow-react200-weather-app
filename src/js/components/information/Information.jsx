import React from 'react';

export default class Information extends React.Component {
  render() {
    const { information } = this.props;
    return (
      <div className='card bg-light mb-3'>
        <div className='card-header alert-primary'>City Information</div>
        <div className='card-body'>
          <div className='media'>
            <div className='media-body'>
              <div className='media-middle'>
                <h1 className='mt-3 mb-2 text-center'>
                  {information.name && (
                    <img
                      alt='Weather icon'
                      className='media-object align-middle'
                      src={ `http://openweathermap.org/img/w/${information.weather[0].icon}.png` }
                    />
                  )}{' '}
                  {information.name}
                </h1>

                <p className='mt-0 mb-1 text-center'>
                  <small>
                    {information.name
                      ? `Lat/Long: ${information.coord.lat}, ${information.coord.lon}`
                      : ''}
                  </small>
                </p>
              </div>
            </div>
          </div>

          <hr />

          <div className='row text-center'>
            <div className='col-sm-4'>
              {information.name && (
                <strong>
                  Temperature
                  <p className='text-success'>{information.main.temp}F</p>
                </strong>
              )}
            </div>
            <div className='col-sm-4'>
              {information.name && (
                <strong>
                  Pressure
                  <p className='text-success'>{information.main.pressure}F</p>
                </strong>
              )}
            </div>
            <div className='col-sm-4'>
              {information.name && (
                <strong>
                  Humidity
                  <p className='text-success'>{information.main.humidity}%</p>
                </strong>
              )}
            </div>
          </div>

          <div className='row text-center'>
            <div className='col-sm-4'>
              {information.name && (
                <strong>
                  Lowest Temp (F)
                  <p className='text-success'>{information.main.temp_min}F</p>
                </strong>
              )}
            </div>
            <div className='col-sm-4'>
              {information.name && (
                <strong>
                  Highest Temp (F)
                  <p className='text-success'>{information.main.temp_max}F</p>
                </strong>
              )}
            </div>
            <div className='col-sm-4'>
              {information.name && (
                <strong>
                  Wind Speed
                  <p className='text-success'>{information.wind.speed}mph</p>
                </strong>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

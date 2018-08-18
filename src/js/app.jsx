import React from 'react';
import Search from './components/search';
import Information from './components/information';
import History from './components/history';
// import axios from 'axios';

// const myKey = process.env.API_KEY;
// console.log(myKey);
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: []
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    // dispatch something
    const { name, alive } = this.state;
    this.props.addCity(name);
    this.setState({ name: '' });
  }

  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1 className='display-4'>Origin Weather Application</h1>
          <p className='lead'>{"Always know if you'll need an umbrella"}</p>
        </div>
        <div>
          <Search />
        </div>
        <div className='row'>
          <div className='col'>
            <Information />
          </div>
          <History />
        </div>
      </div>
    );
  }
}

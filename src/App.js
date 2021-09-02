import React, {Component} from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

class App extends Component {
  static propTypes = {};

  state = {
    query: '',
  };

  getQuery = query => {
    this.setState({ query });
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.getQuery} />
        {/* <h1>Please enter something in input</h1> */}
        <ImageGallery query={this.state.query}/>
        {/* <h1>{error.message}</h1> */}
        <ToastContainer />
      </div>   
    )
  }
}

export default App;
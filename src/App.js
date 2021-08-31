import React, {Component} from 'react';
// import shortid from 'shortid';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Searchbar from './components/Searchbar';
// import SearchForm from './components/SearchForm';
import ImageGallery from './components/ImageGallery';
import Loader from "react-loader-spinner";
import Button from 'components/Button';
// import ContactList from './components/ContactList';

class App extends Component {
  static propTypes = {};

  state = {
    query: '',
    page: 1,
    keyid: '22394687-5b263f11c9e1c3bf9700990e1',
    button: true,
    status: 'idle',
    // url: `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=${this.state.keyid}&image_type=photo&orientation=horizontal&per_page=12`,
  };

  getQuery = query => {
    this.setState({ query });
  }

  handleLoadMore = (e) => {
    this.setState((prevState) => {
      return {
        page: prevState.page + 1,
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    if (prevQuery !== nextQuery) {
      this.setState({ status: 'pending' });
      fetch(`https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=${this.state.keyid}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`Something was wrong, please reload the page`));
        })
        .then(images => {
          console.log(images);
          if (images.totalHits === 0) {
            return Promise.reject(new Error(`Nothing with name ${this.state.query} was not found`));
          }
            this.setState({ images: images.hits, status: 'resolved'});
        })
        .catch(error => this.setState({ error, status: 'rejected' }))
    }
  }

  render() {
    const { images, error, status, button } = this.state;

    if (status === 'idle') {
      return (
        <div>
          <Searchbar onSubmit={this.getQuery} />
          <h1>Please enter something in input</h1>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      );
    }

    if (status === 'pending') {
      return (
        <div>
          <Searchbar onSubmit={this.getQuery} />
          <Loader
        type="Puff"
        color="#00BFFF"
        height={280}
        width={280}
      // timeout={3000} //3 secs
        />
        </div>
        
      );
    }

    if (status === 'rejected') {
      return (
        <div>
          <Searchbar onSubmit={this.getQuery} />
          <h1>{error.message}</h1>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>);
    }

    if (status === 'resolved') {
      return (
        <div>
          <Searchbar onSubmit={this.getQuery} />
          <ImageGallery images={images} />
          {button && <Button
            onClick={this.handleLoadMore}
          />}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>);
    }


    return (
      <div>
        { button && <Button
          onClick={this.handleLoadMore}
        />}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
        
    )
  }
}

export default App;
import React, {Component} from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';

class App extends Component {
  static propTypes = {};

  state = {
    query: '',
    showModal: false,
    modalImage: '',
  };

  openModal = (modalImage) => {
    this.setState({
      showModal: true,
      modalImage,
    })
  }
  
  closeModal = () => {
    this.setState({ showModal: false })
  };

  getQuery = query => {
    this.setState({ query });
  }

  render() {
    const { query, showModal, modalImage } = this.state;
    return (
      <div>
        {showModal && <Modal modalImage={modalImage} onClose={this.closeModal} />}
        <Searchbar onSubmit={this.getQuery} />
        {/* <h1>Please enter something in input</h1> */}
        <ImageGallery query={query} onClick={this.openModal} />
        {/* <h1>{error.message}</h1> */}
        <ToastContainer />
      </div>   
    )
  }
}

export default App;
import { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import Button from 'components/Button';
import ImageGalleryItem from '../ImageGalleryItem';
import picturesApi from '../../servises/picturesApi';

class ImageGallery extends Component {
    static propTypes = {
    query: PropTypes.string,
    onClick: PropTypes.func,
  };

    state = {
        images: [],
        error: null,
        pages: 0,
        page: 1,
        status: 'idle',
    };

    async componentDidUpdate(prevProps, prevState) {
        const prevQuery = prevProps.query;
        const prevPage = prevState.page;
        const nextQuery = this.props.query;
        const nextPage = this.state.page;

        if (prevQuery !== nextQuery) {
            this.resetPage();
            this.setState({ status: 'pending', page: 1 })
            await picturesApi(nextQuery, 1)
                .then(images => {
                    if (images.totalHits === 0) {
                        throw new Error(`Nothing with name ${nextQuery} was not found`);
                    }
                    this.setState((prevState) => ({
                        images: [...images.hits],
                        status: 'resolved',
                        pages: images.totalHits/12,
                    }));
                })
                .catch(error => this.setState({ error, status: 'rejected' }));
            this.autoScroll();
        }

        if (prevPage !== nextPage && nextPage > 1) {
            this.setState({ status: 'another-pending'})
            await picturesApi(nextQuery, nextPage)
                .then(images => {
                    this.setState((prevState) => ({ images: [...prevState.images, ...images.hits], status: 'resolved', }));
                })
                .catch(error => this.setState({ error, status: 'rejected' }));
             this.autoScroll();
        }
    }

    autoScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

    handleLoadMore = () => {
        this.setState((prevState) => {
            return { page: prevState.page + 1 }
        })
    };
    
    resetPage = () => {
        this.setState({page: 1})
    }

    render() {
        const { images, error, status, pages, page} = this.state;

        if (status === 'idle') {
            return (
                <h1>Please, enter something</h1>
            );
        }

        if (status === 'pending') {
            return (
                <Loader
                    type="ThreeDots"
                    color="#3f51b5"
                    height={280}
                    width={280}
                />
            );
        }

        if (status === 'another-pending') {
            return (
                <>
                    <ul className="ImageGallery">
                        <ImageGalleryItem images={images} onClick={this.props.onClick} />
                    </ul>
                    <Loader
                        type="ThreeDots"
                        color="#3f51b5"
                        height={280}
                        width={280}
                    />
                </>
            );
        }

        if (status === 'rejected') {
            return (
                <h1>{error.message}</h1>
            )
        }

        if (status === 'resolved') {
            return (
                <>
                    <ul className="ImageGallery">
                        <ImageGalleryItem images={images} onClick={this.props.onClick} />
                    </ul>
                    {pages >= page ? <Button onClick={this.handleLoadMore} /> : <></>}
                </>
            );
        }
    }
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
};

export default ImageGallery;
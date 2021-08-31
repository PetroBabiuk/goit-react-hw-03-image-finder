import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images }) => (
    <ul className="ImageGallery">
        {images.map(image => (
            <ImageGalleryItem
                key={image.id}
                id={image.id}
                // largeImageURL={image.largeImageURL}
                webformatURL={image.webformatURL}
            />
        ))}
    </ul>
);

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
};

export default ImageGallery;
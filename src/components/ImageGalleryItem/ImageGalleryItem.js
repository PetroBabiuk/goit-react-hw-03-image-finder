import PropTypes from 'prop-types';

const ImageGalleryItem = ({ id, webformatURL }) => (
    <li className="ImageGalleryItem">
        <img src={webformatURL} alt={id} className="ImageGalleryItem-image" />
    </li>
);

ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
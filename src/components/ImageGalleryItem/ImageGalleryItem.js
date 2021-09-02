import PropTypes from 'prop-types';

const ImageGalleryItem = ({ images, onClick }) => {
    return (
        images.map(image => (
            <li key={image.id} className="ImageGalleryItem">
                <img onClick={() => onClick(image)} src={image.webformatURL} alt={image.tags} className="ImageGalleryItem-image" />
            </li>
        )) 
    )
};

ImageGalleryItem.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
    onClick: PropTypes.func,
};

export default ImageGalleryItem;
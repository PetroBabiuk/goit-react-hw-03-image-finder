import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = () => (
    <li className="ImageGalleryItem">
        <img src="" alt="" className="ImageGalleryItem-image" />
    </li>
);

// ImageGalleryItem.propTypes = {
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     onDelete: PropTypes.func.isRequired,
// };

export default ImageGalleryItem;
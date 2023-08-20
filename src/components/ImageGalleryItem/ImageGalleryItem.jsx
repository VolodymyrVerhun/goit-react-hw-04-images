import { useEffect, useState } from 'react';
import style from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ image }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    });
  }, []);
  return (
    <>
      <li onClick={toggleModal} className={style.imageGalleryItem}>
        <img
          className={style.imageGalleryItem__image}
          src={image.webformatURL}
          alt={image.tags}
        />
      </li>
      {isModalOpen && <Modal image={image} toggleModal={toggleModal} />}
    </>
  );
}

ImageGalleryItem.propTypes = {
  toggleModal: PropTypes.func,
  image: PropTypes.object,
};

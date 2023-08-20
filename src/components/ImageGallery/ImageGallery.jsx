import { useEffect, useState } from 'react';
import style from './ImageGallery.module.css';
import { getImage } from 'components/servises/getImage';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ColorRing } from 'react-loader-spinner';
import Button from 'components/Button/Button';
import PropTypes from 'prop-types';

export default function ImageGallery({ searchImage }) {
  const [imageList, setImageList] = useState([]);
  const [isLoadng, setIsLoadng] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.searchImage !== this.props.searchImage) {
  //     this.setState({ isLoadng: true });
  //     getImage(this.props.searchImage)
  //       .then(response => response.json())
  //       .then(imageList => {
  //         this.setState({ imageList: imageList.hits });
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       })
  //       .finally(() => {
  //         this.setState({ isLoadng: false });
  //       });
  //   }
  // }

  useEffect(() => {
    if (searchImage) {
      setIsLoadng(true);
      getImage(searchImage)
        .then(response => response.json())
        .then(list => {
          setImageList(list.hits);
          setHasMore(list.total > list.hits.length);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setIsLoadng(false);
        });
    }
  }, [searchImage]);

  const onSubmitLoadMore = e => {
    e.preventDefault();
    getImage(searchImage, page + 1)
      .then(response => response.json())
      .then(list => {
        setImageList([...imageList, ...list.hits]);
        // setHasMore(list.total > imageList.length);
        setPage(page + 1);
      })
      .finally(() => {
        setIsLoadng(false);
      });
  };
  console.log(imageList);
  return (
    <>
      {isLoadng && <ColorRing />}
      <ul className={style.imageGallery}>
        {imageList.map(image => {
          return (
            <ImageGalleryItem
              // toggleModal={this.toggleModal}
              image={image}
              key={image.id}
            />
          );
        })}
        {hasMore && <Button submit={onSubmitLoadMore} />}
      </ul>
    </>
  );
}

ImageGallery.propTypes = {
  searchImage: PropTypes.string,
};

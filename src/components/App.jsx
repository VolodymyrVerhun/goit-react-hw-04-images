import Searchbar from './Searchbar/Searchbar';
import { useState } from 'react';
import style from './App.module.css';
import ImageGallery from './ImageGallery/ImageGallery';

export function App() {
  const [value, setValue] = useState('');
  const [searchImage, setSearchImage] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();

    handleSearch(value);
  };
  const handleSearch = searchImage => {
    setSearchImage(searchImage);
  };

  return (
    <div className={style.app}>
      <Searchbar
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={value}
      />
      <ImageGallery searchImage={searchImage} />
    </div>
  );
}

import style from './Searchbar.module.css';
import PropTypes from 'prop-types';

export default function Searchbar({ handleChange, handleSubmit, value }) {
  return (
    <header className={style.searchbar}>
      <form className={style.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={style.searchForm__button}>
          <span className={style.searchForm__button__label}>Search</span>
        </button>

        <input
          onChange={handleChange}
          className={style.searchForm__input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  value: PropTypes.string,
};

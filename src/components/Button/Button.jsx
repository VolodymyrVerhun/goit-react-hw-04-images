import style from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ submit }) {
  return (
    <button onClick={submit} className={style.button}>
      Load more
    </button>
  );
}

Button.propTypes = {
  submit: PropTypes.func,
};

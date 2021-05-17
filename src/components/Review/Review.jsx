import PropTypes from 'prop-types';
import styles from './Review.module.scss'

const Review = ({ author, content }) => {
  return (
    <div>
      <b className={styles.author}>{author}</b>
      <p>{content}</p>
    </div>
  );
};

Review.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Review;

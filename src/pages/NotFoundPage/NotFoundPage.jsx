import styles from './NotFoundPage.module.scss';

import React from 'react';
import PageNotFound from '../../assets/images/PageNotFound.jpg';
class NotFoundPage extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <img src={PageNotFound} className={styles.pageNotFound} alt="" />
      </div>
    );
  }
}
export default NotFoundPage;

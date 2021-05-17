// import { useRouteMatch, useLocation, withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import routes from '../../routes';
import styles from './MovieNavigation.module.scss';

// Меню актёров и обзоров

class MovieNavigation extends Component {

  render() {
    const { location, match } = this.props;
    return (
      <div>
        <b className={styles.info}>Additional information:</b>

        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink
              to={{
                pathname: `${match.url}${routes.cast}`, // Формирует путь для ссылки
                state: { ...location.state }, // Передает полученый стейт при переходе на актёров
              }}
              className={styles.link}
              activeClassName={styles['link--active']}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}${routes.reviews}`, // Формирует путь для ссылки
                state: { ...location.state }, // Передает полученый стейт при переходе на обзоры
              }}
              className={styles.link}
              activeClassName={styles['link--active']}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

MovieNavigation.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default MovieNavigation;

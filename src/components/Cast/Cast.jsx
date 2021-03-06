import { Component } from 'react';
import PropTypes from 'prop-types';
import Actor from '../Actor';
import Loader from '../Loader';

import api from '../../services/moviesApi';

import styles from './Cast.module.scss';

class Cast extends Component {
  state = {
    actors: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params; // Получаем id фильма из match.params

    this.setState({
      isLoading: true,
    });

    try {
      const { cast } = await api.fetchCast(movieId);

      this.setState({
        actors: [...cast],
        error: null,
      });
    } catch (error) {
      console.error('Smth wrong with fetch cast on movie page', error);
      this.setState({ error });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    const { actors, isLoading } = this.state;

    return (
      <div>
        {isLoading && <Loader />}

        {actors.length > 0 ? (
          <ul className={styles.list}>
            {actors.map(({ id, profile_path, name, character }) => {
              return (
                <li key={id} className={styles.item}>
                  <Actor
                    photo={profile_path}
                    name={name}
                    character={character}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <p className={styles.castError}>There is no information about actors for this movie.</p>
        )}
      </div>
    );
  }
}

Cast.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Cast;

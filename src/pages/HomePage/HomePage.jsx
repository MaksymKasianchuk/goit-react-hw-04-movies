import React, { Component } from 'react';
import MovieList from '../../components/MovieList';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import api from '../../services/moviesApi';
import styles from './HomePage.module.scss'


class HomePage extends Component {
  state = {
    trends: [],
    isLoading: false,
    error: null,
  };

  // Запрос за трендами при маунте
  async componentDidMount() {
    this.setState({
      isLoading: true,
    });

    try {
      const movies = await api.fetchTrends();

      this.setState({
        trends: movies,
        error: null,
      });
    } catch (error) {
      console.error('Smth wrong with homepage trends fetch', error);
      this.setState({ error });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    const { trends, isLoading } = this.state;

    return (
      <main className={styles.main}>
        {trends ? (
          <MovieList movies={trends} />
        ) : (
          <Message>
            <h2>
              The service is temporarily unavailable. Please try again later.
            </h2>
          </Message>
        )}

        {isLoading && <Loader />}
      </main>
    );
  }
}

export default HomePage;

import { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';

import styles from './SearchForm.module.scss';
import 'react-toastify/dist/ReactToastify.min.css';

class SearchForm extends Component {
  state = {
    query: '',
  };

  // Наблюдает за инпутом и пишет значние в стейт
  handleSearchInput = e => {
    const { value } = e.currentTarget;

    this.setState({
      query: value,
    });
  };

  // Наблюдает за отправкой и отдает значение во внешний компонент
  handleSubmit = e => {
    const { query } = this.state;
    e.preventDefault();

    if (!query.trim()) {
      toast.info('Please write your request', {
        autoClose: 2000,
      });
      return;
    }
    const { onSearch } = this.props;
    onSearch(query);

    this.resetForm();
  };

  // Сбрасывает поле ввода после отправки
  resetForm = () =>
    this.setState({
      query: '',
    });
  
  render() {
    const { query } = this.state;
    return (
      <div className={styles.wrapp}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <button type="submit" title="Go" className={styles.button}>
            <span className={styles.label}>Search</span>
          </button>

          <input
            className={styles.input}
            type="text"
            name="query"
            value={query}
            onChange={this.handleSearchInput}
            autoComplete="off"
            placeholder="Search movies"
            required
          />
        </form>

        <ToastContainer />
      </div>
    );
  }
}

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;

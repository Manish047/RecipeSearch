import React, { Component } from 'react';
import classes from './App.module.css';
import Recipes from './components/Recipes/Recipes';
import Search from './components/Search/Search';
import Paginator from './components/Paginator/Paginator';
import Loader from './components/Loader/Loader';

const APP_ID = 'YOUR_APP_ID';
const APP_KEY = 'YOUR_APP_KEY';
const ITEMS_PER_PAGE = 12;

class App extends Component {

  state = {
    serachValue: '',
    recipesData: [],
    loading: false,
    pages: 0,
    currentPage: 0,
    prevPage: 0,
    nextPage: 0,
    lastPage: 0,
    error: false
  }

  searchClickHandler = (event) => {
    this.setState({ loading: true, error: false });
    event.preventDefault();
    let URL = `https://api.edamam.com/search?q=${this.state.serachValue}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=${ITEMS_PER_PAGE}`;
    fetch(URL)
      .then(res => res.json())
      .then(response => {
        console.log(response);
        this.setState({
          recipesData: response.hits,
          pages: Math.ceil(response.count / ITEMS_PER_PAGE) - 1,
          currentPage: 1,
          prevPage: 0,
          nextPage: 2,
          lastPage: Math.ceil(response.count / ITEMS_PER_PAGE) - 1,
          loading: false,
          error: false
        })
      })
      .catch(error => {
        this.setState({ loading: false, error: true });
      })
  }

  inputChangeHandler = (event) => {
    this.setState({
      serachValue: event.target.value,
    })
  }

  pageChangeHandler = (pageNumber) => {
    this.setState({ loading: true, error: false });
    let URL = `https://api.edamam.com/search?q=${this.state.serachValue}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${pageNumber * ITEMS_PER_PAGE}&to=${pageNumber * ITEMS_PER_PAGE + ITEMS_PER_PAGE}`;
    if (pageNumber === this.state.lastPage) {
      URL = `https://api.edamam.com/search?q=${this.state.serachValue}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${pageNumber * ITEMS_PER_PAGE}`;
    }
    fetch(URL)
      .then(res => res.json())
      .then(response => {
        this.setState({
          recipesData: response.hits,
          currentPage: pageNumber,
          prevPage: pageNumber - 1,
          nextPage: pageNumber + 1,
          loading: false,
          error: false
        })
      })
      .catch(error => {
        this.setState({ loading: false, error: true });
      })
  }

  render() {

    let recipes = null;
    if (this.state.loading) {
      recipes = <Loader />;
    } else {
      recipes = <Recipes recipes={this.state.recipesData} />
    }

    return (
      <div className={classes.App}>
        <h1 className={classes.Title}>Find the most delicious recipes over one place!</h1>
        < Search
          value={this.props.serachValue}
          clicked={this.searchClickHandler}
          changed={this.inputChangeHandler}
          placeholder="Enter recipe you want to search"
          disabled={this.state.loading}
        />
        {this.state.error ? <h1 style={{ color: 'white', fontWeight: 'normal' }}>Something went wrong!</h1> : null}
        {recipes}
        {this.state.pages > 0
          ? <Paginator
            currentPage={this.state.currentPage}
            prevPage={this.state.prevPage}
            nextPage={this.state.nextPage}
            lastPage={this.state.lastPage}
            clicked={this.pageChangeHandler}
          />
          : null}
      </div>
    );
  }
}

export default App;

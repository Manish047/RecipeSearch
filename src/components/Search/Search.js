import React from 'react';
import classes from './Search.module.css';

const Search = props => {
    return (
        <form className={classes.Search} onSubmit={props.clicked}>
            <input type="text" name="search" value={props.value} onChange={props.changed} placeholder={props.placeholder} required />
            <button type="submit" disabled={props.disabled}>
                <i className="fa fa-search"></i>
            </button>
        </form>
    );
}

export default Search;
import React, { Component } from "react";

import PageButton from './PageButton/PageButton';

import classes from './Paginator.module.css';
class Paginator extends Component {

    render() {
        return (
            <div className={classes.Paginator}>
                {this.props.currentPage !== 1
                    ? <PageButton
                        pageNumber="1"
                        clicked={() => this.props.clicked(1)}
                    />
                    : null}
                {this.props.prevPage - 1 !== 1 && this.props.prevPage - 1 > 1
                    ? '...'
                    : null}
                {this.props.prevPage !== 1 && this.props.prevPage > 0
                    ? <PageButton
                        pageNumber={this.props.prevPage}
                        clicked={() => this.props.clicked(this.props.prevPage)}
                    />
                    : null}
                <PageButton
                    pageNumber={this.props.currentPage}
                    isActive={this.props.currentPage}
                    clicked={() => this.props.clicked(this.props.currentPage)}
                />
                {this.props.nextPage !== this.props.lastPage && this.props.nextPage < this.props.lastPage
                    ? <PageButton
                        pageNumber={this.props.nextPage}
                        clicked={() => this.props.clicked(this.props.nextPage)}
                    />
                    : null}
                {this.props.nextPage + 1 !== this.props.lastPage && this.props.nextPage + 1 < this.props.lastPage
                    ? '...'
                    : null}
                {this.props.currentPage !== this.props.lastPage
                    ? <PageButton
                        pageNumber={this.props.lastPage}
                        clicked={() => this.props.clicked(this.props.lastPage)}
                    />
                    : null}
            </div>
        );
    }
}
export default Paginator;
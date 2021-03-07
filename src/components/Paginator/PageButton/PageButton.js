import React from 'react';
import classes from './PageButton.module.css';

const PageButton = props => {

    let assignedClasses = [classes.PageButton]
    if (props.isActive) {
        assignedClasses.push(classes.Active)
    }

    return (
        <button className={assignedClasses.join(' ')} onClick={props.clicked}>
            {props.pageNumber}
        </button>
    )
}

export default PageButton;
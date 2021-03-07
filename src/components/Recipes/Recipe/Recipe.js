import React from 'react'
import classes from './Recipe.module.css';

const Recipe = props => {
    let hours = (props.time / 60).toFixed()
    let minutes = (props.time % 60).toFixed();
    let time = ''
    if (hours > 0) {
        time += hours + 'H';
    }
    if (minutes > 0) {
        time += (hours > 0 ? ':' : '') + minutes + 'M';
    }
    return (
        <div className={classes.Recipe}>
            <div className={classes.Head}>
                <img className={classes.RecipeImage} src={props.image} alt={props.label} />
                <h3 className={classes.Title}>{props.label}</h3>
                <h5 className={classes.TimeTaken}><i className="fa fa-clock-o"></i> {time !== '' ? time : 'Instant'}</h5>
            </div>
            <ul className={classes.Ingredients} >
                {props.ingredients.map(ingredirent => {
                    return (
                        <li
                            key={Math.random()}
                        >
                            {ingredirent}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Recipe;
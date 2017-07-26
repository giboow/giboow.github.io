import React from 'react'
import classNames from 'classnames'

export default ({score}) => {
    const starsIndex = Array.from(Array(5).keys()).map(item => item+1);
    return (
        <div>
            {starsIndex.map((item, key) => {
                const starScore = score - item + 1;
                const classes = classNames(
                    'fa',
                    {
                        'fa-star-o': starScore <= 0,
                        'fa-star-half-empty': starScore > 0 && starScore < 1,
                        'fa-star': starScore => 1
                    }
                );

                return (
                    <span key={key}><i className={classes}></i></span>
                )
            })}
        </div>
    )
}

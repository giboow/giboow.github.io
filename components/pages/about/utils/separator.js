import React from 'react'

export default ({title}) => {
  return (
    <div className="columns">
      <div className="column is-offset-1 is-10 has-text-centered">
        {title && (<h2 className="title is-2">{title}</h2>)}
        <hr/>
      </div>
    </div>
  )
}
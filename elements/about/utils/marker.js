import React from 'react'
import Link from 'next/link'

export default ({city, link}) => (
  <div>
    <i className="fa fa-map-marker"></i> {city}
    {link && (<span>&nbsp;|&nbsp;<Link href={link}><a>{link}</a></Link></span>)}
  </div>
)
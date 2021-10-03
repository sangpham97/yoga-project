import React from 'react'

export default function Rating({ top, stars, title, desc }) {
  return (
    <div className=''>
      <h4 className='is-size-1 has-text-weight-bold has-text-link'>{top}</h4>
      <span className='is-size-6 has-text-link'>{stars}</span>
      <h5 className='is-size-6 has-text-link has-text-weight-bold'>{title}</h5>
      <h5 className='is-size-6 has-text-link has-text-weight-bold'>{desc}</h5>
    </div>
  )
}

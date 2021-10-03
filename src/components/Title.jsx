import React from 'react'

export default function Title({ children, title, subtitle }) {
  return (
    <div className='mx-2 mb-3'>
      <h5 className='is-size-5 has-text-link'>{title}</h5>
      <h3 className='has-text-link is-size-3 has-text-weight-bold has-text-link'>
        {subtitle}
      </h3>
      <div style={{ maxWidth: 450 }}>{children}</div>
    </div>
  )
}

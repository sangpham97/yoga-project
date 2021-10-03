import React from 'react'

export default function Blog({ blog }) {
  return (
    <div className='column is-4-desktop is-12-mobile'>
      <img src={blog.img} alt='' className='image' />
      <h4 className='is-size-4 has-text-link has-text-weight-bold mb-3'>
        {blog.title}
      </h4>
      <p className='is-size-6 has-text-link'>{blog.desc}</p>
    </div>
  )
}

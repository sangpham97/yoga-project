import React from 'react'
import { Link } from 'react-router-dom'
import { blogs } from '../utils'
import Blog from './Blog'
import Title from './Title'

export default function Blogs() {
  return (
    <div className='mt-5'>
      <div className='is-flex is-align-item-center is-justify-content-space-between is-flex-wrap-wrap px-6'>
        <Title
          title='Change Your Life'
          subtitle='Start Your Journey of Happiness and Health Today!'
        />
        <Link
          to='/course'
          className='button is-primary has-text-white is-size-5 is-capitalized'
        >
          view all course
        </Link>
      </div>
      <div className='section'>
        <div className='columns'>
          {blogs.map((blog, index) => (
            <Blog blog={blog} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

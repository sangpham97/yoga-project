import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className='hero px-5 mt-6'>
      <div className='columns is-vcentered'>
        <div className='column is-6-desktop'>
          <h5 className='is-size-5 has-text-link my-4'>
            On-demand Video Courses
          </h5>
          <h1 className='is-size-1 is-size-3-mobile has-text-link has-text-weight-bold my-4'>
            Live a Healthy Life. Learn From Experts.
          </h1>
          <p className='is-size-5 has-text-link my-4'>
            Get healthier by following lorem Ipsum. Proin gravida nibh vel velit
            auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
            nisi elit consequat.
          </p>
          <Link
            to='/course'
            className='button is-primary is-capitalized mt-3 py-2 px-3 is-size-5'
          >
            view all course
          </Link>
        </div>
        <div className='column is-6-desktop'>
          <img
            src='https://websitedemos.net/online-health-coach-02/wp-content/uploads/sites/712/2020/10/yoga-trainer.png'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

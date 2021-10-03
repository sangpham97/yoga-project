import React from 'react'
import { concepts } from '../utils'
import List from './List'

export default function YogaCopliment() {
  return (
    <section className='section mt-3'>
      <div className='columns is-vcentered '>
        <div className='column is-6-desktop'>
          <List data={concepts[0]} />
        </div>
        <div className='column is-6-desktop'>
          <h3 className='is-size-3 has-text-link mb-3 has-text-weight-semibold'>
            User Testimonial
          </h3>
          <div className='media'>
            <div className='media-content'>
              <h5 className='is-size-5 has-text-primary mb-2 '>
                Jessica Simon
              </h5>
              <p className='is-size-6 has-text-link'>
                I have been following this routine and became healthier by doing
                lorem ipsum proin gravida nibh vel velit auctor aliquet aenean.
              </p>
            </div>
            <div className='media-left'>
              <figure className='image is-96x96'>
                <img
                  src='https://websitedemos.net/online-health-coach-02/wp-content/uploads/sites/712/2020/10/customer-review.jpg'
                  alt=''
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

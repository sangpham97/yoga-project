import React from 'react'
import Rating from './Rating'

export default function Compliment() {
  return (
    <section className='section mt-3'>
      <div className='columns is-vcentered '>
        <div className='column is-6-desktop'>
          <div className='is-flex is-align-items-center is-justify-content-space-evenly'>
            <Rating
              top='4.8'
              stars='5'
              title='2,394 Ratings'
              desc='Google Reviews'
            />
            <Rating
              top='A+'
              stars='5'
              title='125 Student Reviews'
              desc='BBB Rating'
            />
          </div>
        </div>
        <div className='column is-6-desktop'>
          <h3 className='is-size-3 has-text-link mb-3'>
            Trusted by over 7000 Health Seekers, Worldwide. Since 2005.
          </h3>
          <div className='media'>
            <div className='media-content'>
              <h5 className='is-size-5 has-text-primary mb-2 '>
                Jessica Simon
              </h5>
              <p className='is-size-6 has-text-link'>
                I have been following this routine and became healthier by doing
                lorem ipsum proin gravida nibh vel velit auctor aliquet aenean.{' '}
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

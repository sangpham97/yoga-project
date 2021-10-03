import React from 'react'
import { benefits, features } from '../utils'
import List from './List'

export default function FeatureBenefit() {
  return (
    <div className='section'>
      <p
        className='is-size-5 has-text-link has-text-centered is-capitalized mb-6'
        style={{ textDecoration: 'underline' }}
      >
        features and benefits
      </p>
      <div className='is-flex is-align-items-center is-justify-content-space-between is-flex-wrap-wrap'>
        <List data={features[0]} />
        <List data={benefits[0]} />
        <img
          src='https://websitedemos.net/online-health-coach-02/wp-content/uploads/sites/712/2020/10/features-and-benefits.jpg'
          alt=''
          className='image mt-3-tablet'
        />
      </div>
    </div>
  )
}

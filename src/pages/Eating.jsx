import React from 'react'
import Menu from '../components/Menu'
import Subcribe from '../components/Subcribe'
import YogaCopliment from '../components/YogaCopliment'
import { EatingList } from '../utils'
import { Ads, CourseDesc } from './Yoga'

export default function Eating() {
  return (
    <div className='m-6 has-background-primary-light p-2'>
      <div className='container'>
        <Ads
          image='https://websitedemos.net/online-health-coach-02/wp-content/uploads/sites/712/2020/10/course3-image-1024x538.jpg'
          title='Control Your Brain with Pranayama'
        />
        <CourseDesc />
        <YogaCopliment />
        <Menu Label='course content' List={EatingList} />
      </div>
      <Subcribe />
    </div>
  )
}

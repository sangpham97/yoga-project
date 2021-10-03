import React from 'react'
import Students from '../components/Students'
import Subcribe from '../components/Subcribe'
import Title from '../components/Title'
import { featuredCourses } from '../utils'

export default function Courses() {
  return (
    <div className='mt-6'>
      <div className='hero container'>
        <h1 className='is-size-1 has-text-weight-bold has-text-link'>
          Courses
        </h1>
        <p className='is-size-6 has-text-link ml-6' style={{ maxWidth: 300 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <CourseCards />
      <Students />
      <Subcribe />
    </div>
  )
}

export const CourseCards = () => {
  return (
    <div className='section mt-6 '>
      <Title subtitle='Featured Courses' />
      <div className='columns is-multiline'>
        {featuredCourses.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </div>
  )
}

export const Card = ({ item }) => {
  return (
    <div className='column is-4-desktop is-6-tablet'>
      <div className='card'>
        <div className='card-image'>
          <figure className='image is-spuare'>
            <img src={item.image} alt={item.name} />
          </figure>
        </div>
        <div className='content p-2'>
          <h3 className='is-size-3 has-text-link'>{item.title}</h3>
          <p className='is-size-6 '>{item.desc}</p>
          <div className=''>
            <button className='button is-primary' style={{ width: '100%' }}>
              See more...
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

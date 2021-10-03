import React from 'react'
import Menu from '../components/Menu'
import Subcribe from '../components/Subcribe'
import Title from '../components/Title'
import YogaCopliment from '../components/YogaCopliment'
import { YogaList } from '../utils'

export default function Yoga() {
  return (
    <div className='m-6 has-background-primary-light p-2'>
      <div className='container'>
        <Ads
          title='Seek Health with Yoga Sadhana'
          image='https://websitedemos.net/online-health-coach-02/wp-content/uploads/sites/712/2016/12/course1-image-1024x538.jpg'
        />
        <CourseDesc />
        <YogaCopliment />
        <Menu Label='course content' List={YogaList} />
      </div>
      <Subcribe />
    </div>
  )
}

export const Ads = ({ title, image }) => {
  return (
    <div className='hero'>
      <Title subtitle={title} />
      <img src={image} alt='' />
      <div className='mt-5 is-flex is-align-items-center is-justify-content-space-between'>
        <p className='is-size-5 has-text-link'>
          You are not enrolled in this course
        </p>
        <button className='button is-primary has-text-weight-bold px-5 '>
          Get Started
        </button>
      </div>
    </div>
  )
}

//course desc section

export const CourseDesc = () => {
  return (
    <>
      <div
        className='my-3 pb-3 has-border-bottom'
        style={{ borderBottom: '1px solid' }}
      >
        <Title subtitle='Course Description' />
      </div>
      <div className='columns mt-3'>
        <div className='column is-6-desktop has-text-link'>
          Repellat perspiciatis cum! Doloremque ea viverra eu doloremque tellus
          aliqua gravida fuga dolorum augue, donec beatae. Class urna et
          doloremque facilisis autem risus fuga nullam quibusdam, tortor
          deleniti, accumsan dolorem? Posuere hac? Tellus maiores ullam
          ullamcorper, nostrud lacinia veniam torquent?
        </div>
        <div className='column is-6-desktop has-text-link'>
          Consequuntur a lobortis magnam mollis ac, explicabo nobis, pretium
          omnis, adipisci placerat, nostrum reiciendis? Illo natoque provident
          potenti ullamcorper quis hymenaeos lectus nobis nobis dui.Posuere hac?
          Tellus maiores ullam ullamcorper, nostrud lacinia veniam torquent?
        </div>
      </div>
    </>
  )
}

import React from 'react'
import Title from './Title'

export default function Students() {
  return (
    <div className='section has-background-white'>
      <div className='columns pt-5'>
        <div className='column is-5-desktop'>
          <Title subtitle='Happy Faces of Happy Students'>
            <p className='is-size-6 has-text-link p-2'>
              Proin gravida nibh vel velit auctor aliquet. Aenean sollici tudin,
              lorem quis biben dum auctor, nisi elit conse quat. View All
              Testimonials
            </p>
            <button className='button is-primary is-capitalized mt-3'>
              view all testimonials
            </button>
          </Title>
        </div>
        <div className='column is-7-desktop'>
          <div className='block'>
            <img
              src='https://websitedemos.net/online-health-coach-02/wp-content/uploads/sites/712/2020/10/student3.jpg'
              alt=''
            />
            <img
              src='https://websitedemos.net/online-health-coach-02/wp-content/uploads/sites/712/2020/10/student1.jpg'
              alt=''
            />
            <img
              src='https://websitedemos.net/online-health-coach-02/wp-content/uploads/sites/712/2020/10/student2.jpg'
              alt=''
            />
            <img
              src='https://websitedemos.net/online-health-coach-02/wp-content/uploads/sites/712/2020/10/student6.jpg.jpg'
              alt=''
            />
            <img
              src='https://websitedemos.net/online-health-coach-02/wp-content/uploads/sites/712/2020/10/student4.jpg'
              alt=''
            />
            <img
              src='https://websitedemos.net/online-health-coach-02/wp-content/uploads/sites/712/2020/10/student5.jpg.jpg'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  )
}

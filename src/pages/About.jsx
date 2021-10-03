import React from 'react'
import Bg from '../images/about-us-bg.jpg'
import Title from '../components/Title'
import Students from '../components/Students'
import Subcribe from '../components/Subcribe'
import { trainer } from '../utils'

export default function About() {
  return (
    <div
      className='hero is-fullheight'
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(' +
          `${Bg}` +
          ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        backgroundAttachment: 'fixed',
      }}
    >
      <AboutTop />
      <AboutBottom />
      <Students />
      <Subcribe />
    </div>
  )
}

export const AboutTop = () => {
  return (
    <div>
      <div className='block has-background-white p-6'>
        <div className='container'>
          <h1 className='is-size-1 has-text-weight-bold has-text-link'>
            About Us
          </h1>
          <p className='is-size-6 has-text-link ml-6' style={{ maxWidth: 300 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
      <div
        className=' has-background-white is-flex is-align-items-center is-justify-content-flex-start m-6'
        style={{ maxWidth: 570 }}
      >
        <div className=' p-5'>
          <h1 className='title has-text-link '>
            We are Yoga & Nutrition Experts
          </h1>
          <p className='subtitle has-text-link '>
            Proin gravida nibh vel velit auctor aliquet.
          </p>
          <p className='subtitle has-text-link is-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin
            gravida nibh vel velit auctor aliquet. Aenean sollici tudin, lorem
            quis biben dum auctor, nisi elit conse quat.{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export const AboutBottom = () => {
  return (
    <div className='has-background-white mt-6 p-4'>
      <Title title='WE HELP YOU STAY HEALTHY​' subtitle='The Trainers'>
        <p className='is-6 has-text-link'>
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat.
        </p>
      </Title>
      <AboutTrainers />
    </div>
  )
}

export const AboutTrainers = () => {
  return (
    <section className='section mt-5'>
      <div className='block'>
        {trainer.map((i, index) => (
          <AboutTrainer i={i} key={index} num={index} />
        ))}
      </div>
    </section>
  )
}

export const AboutTrainer = ({ i, num }) => {
  console.log(num)
  return (
    <div
      className={
        num === 1
          ? 'columns is-vcentered is-flex-direction-row-reverse'
          : 'columns is-vcentered'
      }
    >
      <div className='column is-7-desktop'>
        <h2 className='title is-2 has-text-link has-text-weight-semibold'>
          {i.name}
        </h2>
        <p className='subtitle has-text-link is-6'>{i.desc}</p>
      </div>
      <div className='column is-5-desktop'>
        <img src={i.img} alt={i.name} className='image' />
      </div>
    </div>
  )
}

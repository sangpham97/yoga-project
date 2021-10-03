import React from 'react'
import { trainer } from '../utils'
import Title from './Title'

export default function Trainers() {
  return (
    <div className='section '>
      <Title title='We Help You Stay Healthy' subtitle='The Trainers'>
        <p className='is-size-6 has-text-link'>
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat.{' '}
        </p>
      </Title>
      <div className='block mt-5'>
        <div className='columns is-variable is-1-mobile is-2-tablet is-multiline'>
          {trainer.map((trainer, i) => (
            <Trainer trainer={trainer} key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export const Trainer = ({ trainer }) => {
  return (
    <div className='column is-6-desktop is-12-mobile is-12-tablet'>
      <div className='media is-vcentered is-flex-wrap-wrap'>
        <div className='media-right'>
          <figure class='image' style={{ maxWidth: 230, maxHeight: 230 }}>
            <img src={trainer.img} alt={trainer.name} className='image' />
          </figure>
        </div>
        <div
          className='media-content m-4 '
          style={{ maxWidth: 250, lineHeight: 1.8 }}
        >
          <Title subtitle={trainer.name}>
            <p className='has-text-link is-size-6'>{trainer.desc}</p>
          </Title>
        </div>
      </div>
    </div>
  )
}

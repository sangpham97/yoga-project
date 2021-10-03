import React from 'react'
import Subcribe from '../components/Subcribe'
import Title from '../components/Title'

export default function Contact() {
  return (
    <div className='hero pt-6'>
      <div className='mx-4'>
        {/* Title */}
        <h1 className='is-size-1 has-text-weight-bold has-text-link'>
          Contact
        </h1>
        <p
          className='is-size-6 has-text-link ml-6 mb-5'
          style={{ maxWidth: 300 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        {/* End Title */}
        <div className='columns is-vcentered mb-6'>
          <div className='column is-5-desktop'>
            <Questions />
          </div>
          <div className='column is-7-desktop'>
            <Form />
          </div>
        </div>
      </div>
      <Subcribe />
    </div>
  )
}

export const Questions = () => {
  return (
    <div className='menu mt-6'>
      <Title subtitle='Have a question ?'>
        <p className='subtitle has-text-link'>
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auctor, nisi elit consequat.
        </p>
      </Title>
      <ul className='menu-list ml-6' style={{ lineHeight: 2 }}>
        <li className='mb-2'>
          <h4 className='is-size-4 has-text-weight-bold has-text-link '>
            Emergency? Call Us:
          </h4>
          <p className='subtitle has-text-link'>+1 234 567 890</p>
        </li>
        <li className='mb-2'>
          <h4 className='is-size-4 has-text-weight-bold has-text-link '>
            Send us Email
          </h4>
          <p className='subtitle has-text-link'>info@exaple.com</p>
        </li>
      </ul>
    </div>
  )
}

export const Form = () => {
  return (
    <form className='box has-background-primary-light'>
      <input
        type='text'
        className='input m-1 has-background-grey-light'
        placeholder='Name'
      />
      <input
        type='email'
        className='input m-1 has-background-grey-light'
        placeholder='Email'
      />
      <input
        type='text'
        className='input m-1 has-background-grey-light'
        placeholder='Text'
      />
      <textarea
        className='textarea has-background-grey-light'
        placeholder='Your Message'
      />
      <button className='button is-primary mt-3'>Send Message</button>
    </form>
  )
}

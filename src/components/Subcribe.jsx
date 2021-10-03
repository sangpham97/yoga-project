import React from 'react'

export default function Subcribe() {
  return (
    <div className='section has-background-primary-light is-flex is-align-items-center is-justify-content-center is-flex-direction-column'>
      <h2 className='has-text-link is-size-2 has-text-weight-semibold'>
        Subscribe to Newsletter
      </h2>
      <p className='has-text-link is-size-6 my-5'>
        Enter your email address to register to our newsletter subscription
        delivered on regular basis!
      </p>
      <form className='filed is-flex px-6 py-5'>
        <input
          type='email'
          placeholder='Email Adress'
          className='input is-primary has-background-light '
        />
        <button className='button is-primary is-capitalized '>Subcribe</button>
      </form>
    </div>
  )
}

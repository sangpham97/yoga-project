import React from 'react'

export default function Menu({ Label, List }) {
  return (
    <div className='menu'>
      <h4 className='menu-label has-text-link is-size-4 has-text-weight-semibold'>
        {Label}
      </h4>
      <ul className='menu-list'>
        {List.map((item, index) => (
          <li key={index} className='py-1 is-capitalized is-size-6'>
            <div className='box'>{item.title}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

import React from 'react'

export default function List({ data }) {
  return (
    <div style={{ lineHeight: 1.7 }}>
      <h3 className='has-text-link is-size-3 has-text-weight-bold is-capitalized'>
        {data.title}
      </h3>
      <ul>
        {data.item.map((i, index) => {
          return (
            <>
              <p
                className='is-size-6 has-text-link is-capitalized '
                key={index}
              >
                {i}
              </p>
            </>
          )
        })}
      </ul>
    </div>
  )
}

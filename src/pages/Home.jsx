import React from 'react'
import Compliment from '../components/Compliment'
import Hero from '../components/Hero'
import Blogs from '../components/Blogs'
import FeatureBenefit from '../components/FeatureBenefit'
import Trainers from '../components/Trainers'
import Students from '../components/Students'
import Subcribe from '../components/Subcribe'

export default function Home() {
  return (
    <div>
      <Hero />
      <Compliment />
      <Blogs />
      <FeatureBenefit />
      <Trainers />
      <Students />
      <Subcribe />
    </div>
  )
}

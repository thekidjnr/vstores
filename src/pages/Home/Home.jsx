import React from 'react'
import { Header } from '../../components/Header/Header'
import { How } from '../../components/How/How'
import { Questions } from '../../components/Questions/Questions'
import { Reviews } from '../../components/Reviews/Reviews'

export const Home = () => {
  return (
    <div>
        <Header />
        <How />
        <Questions />
        <Reviews/>
    </div>
  )
}

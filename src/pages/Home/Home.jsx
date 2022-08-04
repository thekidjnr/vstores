import React from 'react'
import { Header } from '../../components/Header/Header'
import { How } from '../../components/How/How'
import { Questions } from '../../components/Questions/Questions'

export const Home = () => {
  return (
    <div>
        <Header />
        <How />
        <Questions />
    </div>
  )
}

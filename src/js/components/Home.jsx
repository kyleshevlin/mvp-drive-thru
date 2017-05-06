import React from 'react'
import { Link } from 'react-router-dom'

const links = [
  {
    to: '/create-order',
    label: 'Start New Order'
  },
  {
    to: '/open-orders',
    label: 'Open Orders'
  },
  {
    to: '/canceled-orders',
    label: 'Canceled Orders'
  },
  {
    to: '/completed-orders',
    label: 'Completed Orders'
  }
]

const Home = () => (
  <div className='home'>
    {links.map(link => (
      <div className='home-link' key={link.to}>
        <Link to={link.to}>{link.label}</Link>
      </div>
    ))}
  </div>
)

export default Home

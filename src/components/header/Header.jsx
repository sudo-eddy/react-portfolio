import React from 'react'
import './header.css'
import CTA from './CTA'
import headshot from '../../assets/laptop.png'
import HeaderIcons from './HeaderIcons'

const Header = () => {
  return (
    <header className='container'>
      <div className='container header__container'>
        <h5 className='sm-2 name-text-sm'>Hello, I'm</h5>
        <h1 className='sm-4 name-text-lg'>Eddy Castillo</h1>
        <h2 className='sm-3 job-title'>Software Engineer</h2>
        <h3 className='sm-3 job-subtitle'>Fullstack | SDET | Automation</h3>
        <CTA />
        <HeaderIcons />
        <div className='headshot'>
          <img src={headshot} alt='me' />
        </div>
      </div>
    </header>
  )
}

export default Header

import React from 'react'
import './header.css'
import CTA from './CTA'
import headshot from '../../assets/headshot-full.png'
import HeaderIcons from './HeaderIcons'

const Header = () => {
  return (
    <header>
        <div className='container header__container'>
            <h5 className='name-text-sm'>Hello, I'm</h5>
            <h1 className='name-text-lg'>Eddy Castillo</h1>
            <h2 className='job-title'>Software Engineer</h2>
            <h3 className='job-subtitle'>Fullstack | SDET | Automation</h3>
            <CTA />
            <HeaderIcons />
            <div className='headshot'>
              <img src={headshot} alt='me'/>
            </div>

            <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header

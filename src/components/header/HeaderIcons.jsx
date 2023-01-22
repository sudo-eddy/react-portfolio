import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'


const HeaderIcons = () => {
  return (
    <div className='header__icons'>
        <a href='https://www.linkedin.com/in/eddy-automates/' target='_blank'>
            <BsLinkedin />
        </a>
        <a href='https://github.com/sudo-eddy' target='_blank'>
            <FaGithub />
        </a>
    </div>
  )
}

export default HeaderIcons

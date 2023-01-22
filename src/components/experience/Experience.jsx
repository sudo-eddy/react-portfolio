import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import techStack from './Enumerators'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Let's get technical</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {
          techStack.map(({ category, details }) => {
            return (
              <div className='experience__content'>
                <h3 className='category-title'>{category}</h3>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon' />
                  <div>
                    <h4>
                      {details.lang1}
                    </h4>
                    <small>
                      {details.exp1}
                    </small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon' />
                  <div>
                    <h4>
                      {details.lang2}
                    </h4>
                    <small>
                      {details.exp2}
                    </small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon' />
                  <div>
                    <h4>
                      {details.lang3}
                    </h4>
                    <small>
                      {details.exp3}
                    </small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon' />
                  <div>
                    <h4>
                      {details.lang4}
                    </h4>
                    <small>
                      {details.exp4}
                    </small>
                  </div>
                </article>
              </div>

            )
          })
        }

      </div>

    </section>
  )
}

export default Experience

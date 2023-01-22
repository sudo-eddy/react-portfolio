import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';
import {IoPulse} from 'react-icons/io5';
import {BiCode} from 'react-icons/bi';


const Services = () => {
    return (
        <section id='services'>
            <h5>My services</h5>
            <h2>Need help with your project?</h2>

            <div id='services__article' className='container services__container'>
                <article className='service'>
                    <div>
                        <h3 className='service__head'><IoPulse className='service__title-icon'/>Quality Assurance</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <p>
                                <BiCheck className='service__list-icon' />
                                UI & API testing with Selenium, Cypress, and Playwright.
                            </p>
                        </li>
                        <li>
                            <p>
                                <BiCheck className='service__list-icon' />
                                API performance testing with JMeter.
                            </p>
                        </li>
                        <li>
                            <p>
                                <BiCheck className='service__list-icon' />
                                Test automation framework design and implementation.
                            </p>
                        </li>
                        <li>
                            <p>
                                <BiCheck className='service__list-icon' />
                                Page object models, TDD, BDD, Black-box and white-box testing.
                            </p>
                        </li>
                        <li>
                            <p>
                                <BiCheck className='service__list-icon' />
                                Data quality profiling and regression with <a href='https://towardsdatascience.com/great-expectations-the-data-testing-tool-is-this-the-answer-to-our-data-quality-needs-f6d07e63f485'>Airflow & great_expectations</a>
                            </p>
                        </li>
                    </ul>
                </article>
                <article className='service'>
                <div>
                        <h3 className='service__head'><BiCode className='service__title-icon'/>Development</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <p>
                                <BiCheck className='service__list-icon' />
                                API development with Flask or NestJS
                            </p>
                        </li>
                        <li>
                            <p>
                                <BiCheck className='service__list-icon' />
                                Front-end development with React.
                            </p>
                        </li>
                        <li>
                            <p>
                                <BiCheck className='service__list-icon' />
                                Data analysis and visualization with Python & Pandas.
                            </p>
                        </li>
                        <li>
                            <p>
                                <BiCheck className='service__list-icon' />
                                Scheduling and Orchestration with Airflow, Jenkins, and scripting.
                            </p>
                        </li>
                        <li>
                            <p>
                                <BiCheck className='service__list-icon' />
                                Version control with Git, Github, and Gitlab. 
                            </p>
                        </li>
                        <li>
                            <p>
                                <BiCheck className='service__list-icon' />
                                Data management with PostgreSQL, Snowflake, and AWS services.
                            </p>
                        </li>
                    </ul>
                </article>

            </div>
        </section>
    )
}

export default Services
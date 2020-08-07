import React from 'react'
import classes from './Uncomma.module.css'

const Uncomma = () =>
    <div className="app-header">
        <header>
            <a href="/" className={classes['logo']}>
                <span className={classes['logo-text-part1']}>un</span>

                <span className={classes['logo-text-part2']}>comma
                        <div className={classes['comma']}/>
                </span>
            </a>
            <section className={classes['header-text']}>
                <span className={classes['bold-text']}>We bring your ideas to life<span
                    className={classes['dot']}>.</span>
                </span>

                <span>
                    <br/>We <span className={classes['box']}>design</span> & <span
                    className={classes['box']}>develop</span> interactive experiences
                </span>
            </section>
        </header>
        <h1>Tell what do you want us to do</h1>
    </div>

export default Uncomma
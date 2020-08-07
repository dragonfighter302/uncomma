import React from 'react'
import classes from './FormOrderDetails.module.css'

const FormOrderDetails = ({prevStep, handleChange, sendMessage, step}) => {
    return (
        <div>
            <div className={`${classes['grey-text']} ${classes['form-status']}`}>{step}/2</div>
            <div className={classes['grey-text']}>Almost done. It's important to fill
                in these fields before starting work
            </div>
            <div className={classes['flex-grid']}>
                <div className={classes['grid-item']}>
                    <input type="text" size="40"
                           placeholder="First and Last name"
                           onChange={handleChange('name')}
                    />
                </div>
                <div className={classes['grid-item']}>
                    <input type="text" size="40" placeholder="Email"
                           onChange={handleChange('email')}/>
                </div>
                <div className={classes['grid-item']}>
                    <textarea placeholder="Give brief description of your order"
                              onChange={handleChange('description')}/>
                </div>
                <div className={classes['grid-item']}>
                    <button className={`${classes['yellow-btn']} ${classes['back-btn']}`} onClick={prevStep}>Back
                    </button>
                    <button className={classes['yellow-btn']} onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default FormOrderDetails

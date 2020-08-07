import React from 'react';
import classes from './FormOrder.module.css'

const FormOrder = ({nextStep, handleChange, step}) =>
    <div>
        <div className={`${classes['grey-text']} ${classes['form-status']}`}>{step}/2</div>
        <div className={classes['grey-text']}>We need this information to sort your order and respond you as
            soon as possible
        </div>
        <div className={classes['flex-grid']}>
            <div className={classes['grid-item']}>
                <label className={classes['check']}>Web, Mobile & Software dev
                    <input type="radio" name="order_type" value="Web, Mobile & Software dev"
                           onChange={handleChange('typeOfOrder')}/>
                    <span className={classes['checkmark']}/>
                </label>
            </div>
            <div className={classes['grid-item']}>
                <label className={classes['check']}>Design & Creative
                    <input type="radio" name="order_type" value="Design & Creative"
                           onChange={handleChange('typeOfOrder')}/>
                    <span className={classes['checkmark']}/>
                </label>
            </div>
            <div className={classes['grid-item']}>
                <label className={classes['check']}>Data Science & IT
                    <input type="radio" name="order_type" value="Data Science & IT"
                           onChange={handleChange('typeOfOrder')}/>
                    <span className={classes['checkmark']}/>
                </label>
            </div>
            <div className={classes['grid-item']}>
                <label className={classes['check']}>Translation
                    <input type="radio" name="order_type" value="Translation"
                           onChange={handleChange('typeOfOrder')}/>
                    <span className={classes['checkmark']}/>
                </label>
            </div>
            <div className={classes['grid-item']}>

            </div>
            <div className={classes['grid-item']}>
                <button className={classes['yellow-btn']} onClick={nextStep}>Next</button>
            </div>
        </div>
    </div>

export default FormOrder;
import React, { useContext, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import classes from './feedbackform.module.css'

const FeedbackForm = () => {
    const [email, setEmail] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [phoneCode, setPhoneCode] = useState<string>("")
    const [isValid, setIsValid] = useState<boolean>(false)

    const submitHandler = (e: any) => {
        e.preventDefault()
        if (!email && !phoneCode && !phone) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }
    return (
        <div className={classes.formContainer}>
            <form action="" onSubmit={submitHandler}>
                <div className={classes.heading}>
                    <h1>Thank you so much for taking the time</h1>
                    <p>Please provide the below details </p>
                </div>

                <div className={classes.field}>
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder='John' />
                </div>
                <div className={classes.field}>
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder='Doe' />
                </div>
                <div className={classes.field}>
                    <label htmlFor="">Address</label>
                    <textarea placeholder='Enter your full postal address' />
                </div>

                <div className={`${classes.field} ${classes.countryField}`}>
                    <label htmlFor="">Country</label>
                    <div className={classes.country}>
                        <input placeholder='Bangladesh' />
                        <FiSearch />
                    </div>
                </div>

                <div className={`${classes.field} ${classes.customized}`}>
                    <label htmlFor="">Email Id</label>
                    <div className={classes.flex}>
                        <input onChange={(e: any) => setEmail(e.target.value)} type="email" placeholder='example@gmail.com' />
                        {isValid && <p>Please enter a valid e-mail</p>}
                    </div>
                </div>

                <div className={`${classes.field} ${classes.customized}`}>
                    <label>Phone</label>
                    <div className={classes.phone}>
                        <input onChange={(e: any) => setPhoneCode(e.target.value)} className={classes.code} type="number" placeholder='+880' />
                        <input onChange={(e: any) => setPhone(e.target.value)} className={classes.number} type="number" placeholder='45465456' />
                        {isValid && <p>Please enter a valid number</p>}
                    </div>

                </div>

                <button className={classes.submitBtn}>Submit Feedback</button>
            </form>
        </div>
    )
}

export default FeedbackForm
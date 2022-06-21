import React, { useContext } from 'react'
import { KalpasContext } from '../../../context'
import classes from '../sidebar.module.css'


const Feedback = () => {
    const { showForm, handleForm }: any = useContext(KalpasContext)
    const styles = showForm ? classes.feedbackBtnActive : classes.feedbackBtn
    return (
        <div className={`${classes.card} ${classes.feedbackCard}`}>
            <h2>Have a feedback?</h2>
            <button onClick={handleForm} className={`${styles}`}>We're listening</button>
        </div>
    )
}

export default Feedback
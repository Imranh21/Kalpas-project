import React from 'react'
import classes from '../sidebar.module.css'

const User = () => {
    return (
        <div className={`${classes.card} ${classes.userCard}`}>
            <div className={classes.imgBox}>
                <img src="/images/user.jpg" alt="" />
            </div>

            <div className={classes.content}>
                <h3>Hi, Reader</h3>
                <p>Have a nice day.</p>
            </div>
        </div>
    )
}

export default User
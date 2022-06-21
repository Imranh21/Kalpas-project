import React from 'react'
import { Post } from '../../types'
import { addDots } from '../../utils/addDots'
import classes from "./content.module.css"
import { MdClose } from 'react-icons/md'


interface Props {
    post: Post
}
const VerticalCard = ({ post }: Props) => {
    return (
        <div className={classes.vertical}>
            <MdClose className={classes.icon} />
            <div className={classes.textContent}>
                <h3>{addDots(post.title, 10)}</h3>
                <p>{addDots(post.body, 20)}</p>
                <p className={classes.date}>{new Date().toDateString()}</p>
            </div>
            <div className={classes.imgBox}>
                <img src="/images/pic1.jpg" alt="" />
            </div>
        </div>
    )
}

export default VerticalCard
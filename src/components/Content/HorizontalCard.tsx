import React from 'react'
import { Post } from '../../types'
import { addDots } from '../../utils/addDots'
import classes from "./content.module.css"
import { MdClose } from 'react-icons/md'


interface Props {
    post: Post
}

const HorizontalCard = ({ post }: Props) => {
    return (
        <div key={post.id} className={classes.horizontal}>
            <div className={classes.wrapper}>
                <div className={classes.imgBox}>
                    <img src="/images/pic3.jpg" alt="" />
                </div>

                <div className={classes.textContent}>
                    <h3>{addDots(post.title, 20)}</h3>
                    <p>{addDots(post.body, 60)}</p>
                    <p className={classes.date}>{new Date().toDateString()}</p>
                </div>
            </div>
            <div className={classes.closeBtn}>
                <MdClose />
            </div>
        </div>
    )
}

export default HorizontalCard
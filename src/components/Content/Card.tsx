import React, { useContext } from 'react'
import { Post } from '../../types'
import classes from "./content.module.css"
import { MdClose } from 'react-icons/md'
import { KalpasContext } from '../../context'

interface Props {
    post: Post
    cardShowState: string
}

export const addDots = (str: string) => {
    const dots = "..."
    if (str.length > 40) {
        const sliced = str.slice(0, 50)
        return sliced + dots
    } else {
        return str
    }
}

const Card = ({ post, cardShowState }: Props) => {

    return (
        <>
            {cardShowState === "horizontal" ? <div key={post.id} className={classes.cardOne}>
                <div className={classes.wrapper}>
                    <img src="" alt="" />
                    <div className={classes.textContent}>
                        <h3>{addDots(post.title)}</h3>
                        <p>{addDots(post.body)}</p>
                        <p className={classes.date}>{new Date().toDateString()}</p>
                    </div>
                </div>
                <div className={classes.closeBtn}>
                    <MdClose />
                </div>
            </div>
                :
                <div className={classes.cardTwo}>
                    <div className={classes.textContent}>
                        <h3>{addDots(post.title)}</h3>
                        <p>{addDots(post.body)}</p>
                        <p className={classes.date}>{new Date().toDateString()}</p>
                    </div>
                    <div className={classes.imgBox}>

                    </div>
                </div>}
        </>
    )
}

export default Card


import React, { useContext } from 'react'
import { KalpasContext } from '../../context'
import { Post } from '../../types'
import Card from './Card'
import classes from './content.module.css'
import HorizontalCard from './HorizontalCard'
import VerticalCard from './VerticalCard'

interface Props {
    posts: Post[]
}
const CardList = ({ posts }: Props) => {
    const { cardShowState }: any = useContext(KalpasContext)
    return (
        <>
            {cardShowState === "horizontal" ? <div className={classes.contentListCol}>
                {posts?.map((post: Post) => (
                    <HorizontalCard {...{ post }} />
                ))}
            </div> : <div className={classes.contentListFlex}>
                {posts?.map((post: Post) => (
                    <VerticalCard {...{ post }} />
                ))}
            </div>}
        </>

    )
}

export default CardList
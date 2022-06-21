import React, { useContext } from 'react'
import classes from './content.module.css'
import KalpasContext from '../../context'
import { Post } from '../../types'

import Dot from './Dot'
import CardList from './CardList'


interface Props {
    posts: any
}
const Content = ({ posts }: Props) => {

    return (
        <div className={classes.content}>
            <div className={classes.container}>
                <CardList {...{ posts }} />
                <div className={classes.navigators}>
                    <Dot />
                </div>
            </div>
        </div>
    )
}

export default Content
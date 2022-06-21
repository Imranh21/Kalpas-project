import React, { useContext } from 'react'
import { KalpasContext } from '../../context'
import Feedback from './cards/Feedback'
import Toggle from './cards/Toggle'
import User from './cards/User'
import classes from './sidebar.module.css'

const Sidebar = () => {
    const { showForm }: any = useContext(KalpasContext)

    return (
        <div className={classes.sidebar}>
            <User />
            {!showForm && <Toggle />}
            <Feedback />
        </div>
    )
}

export default Sidebar
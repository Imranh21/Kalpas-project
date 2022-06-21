import React, { useContext } from 'react'
import classes from '../sidebar.module.css'
import { BsCardList, BsCardHeading } from 'react-icons/bs'
import { KalpasContext } from '../../../context'

const Toggle = () => {
    const { cardShowState, handleCardShow }: any = useContext(KalpasContext)
    return (
        <div className={`${classes.card} ${classes.toggleCard}`}>
            <h2>View Toggle</h2>
            <div className={classes.options}>
                <div onClick={() => handleCardShow("vertical")} className={cardShowState === "vertical" ? `${classes.activeOption} ${classes.option}` : classes.option}>
                    <BsCardHeading className={classes.flexIcon} />
                </div>
                <div onClick={() => handleCardShow("horizontal")} className={cardShowState === "horizontal" ? `${classes.activeOption} ${classes.option}` : classes.option}>
                    <BsCardList className={classes.flexIcon} />
                </div>
            </div>
        </div >
    )
}

export default Toggle
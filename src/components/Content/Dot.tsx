import React, { useContext } from 'react'
import classes from './content.module.css'
import { MdDoubleArrow } from 'react-icons/md'
import { KalpasContext } from '../../context'


const paginations = [
    {
        id: 1,
        value: 1
    },
    {
        id: 2,
        value: 2
    },
    {
        id: 3,
        value: 3
    }
]
const Dot = () => {
    const { page, paginatePage, next }: any = useContext(KalpasContext)
    return (
        <>
            {paginations.map((pagination: any) => (
                <div style={{ backgroundColor: page === pagination.value ? "#fff" : "", color: page === pagination.value ? "#000" : "" }} onClick={() => paginatePage(pagination.value)} key={pagination.id} className={`${classes.dot} `}>{pagination.value}</div>
            ))
            }
            {page < 3 && <MdDoubleArrow style={{ cursor: "pointer" }} onClick={() => next()} />}
        </>
    )
}

export default Dot
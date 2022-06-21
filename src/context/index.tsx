import React, { createContext, ReactNode, useCallback, useEffect, useState } from 'react'
import { Client } from '../axios'
import { AppContext, Post } from '../types';

interface Props {
    children: any
}

export const KalpasContext = createContext<AppContext | null>(null);

const Kalpas = ({ children }: Props) => {
    const [posts, setPosts] = useState<Post[]>([])
    const [page, setPage] = useState<number>(1)
    const [showForm, setShowForm] = useState<boolean>(false)
    const [cardShowState, setCardShowState] = useState<string>("horizontal")

    const getPosts = useCallback(async () => {
        try {
            const { data } = await Client.get(`/posts?_page=${page}&_limit=6`)
            setPosts(data)
        } catch (err: any) {
            console.log(err.message)
        }
    }, [page])
    useEffect(() => {
        getPosts()
    }, [page])

    const next = useCallback(() => {
        setPage(prev => prev + 1)
    }, [])

    const paginatePage = (value: number) => {
        setPage(value)
    }

    const handleForm = useCallback(() => {
        setShowForm(prev => !prev)
    }, [])

    const handleCardShow = (value: string) => {
        setCardShowState(value)
    }

    return (
        <KalpasContext.Provider value={{ posts, page, paginatePage, next, showForm, handleForm, cardShowState, handleCardShow }}>
            {children}
        </KalpasContext.Provider>
    )
}

export default Kalpas
"use client"

import React, { useEffect, useState } from 'react'
import styles from "../[id]/details.module.css"
import Image from 'next/image'
// import { BsFillCartFill } from "react-icons/bs"
// import { useDispatch } from "react-redux"

// import ReviewCard from "../../../components/ReviewCard"
import { getBookById } from "../../../lib/fake-data"
// import ReviewModal from "../../../components/ReviewCard"
// import AddToCart from "../../../components/AddToCart"
// import { addBook } from "../../redux/cartSlice"

const Details = (ctx) => {

    //  const dispatch = useDispatch

    const id = ctx.params.id



    const book = getBookById(id)


    // const URL = `https://openlibrary.org/works/${id}.json`
    // const dispatch = useDispatch()
    // const [book, setBook] = useState({})
    const [review, setReviews] = useState([])
    const [showModal, setShowModal] = useState(false)

    // five dollars per 100 pages
    // const price = ((book?.pages / 100) * 5).toFixed(2)

    useEffect(() => {
        const fetchDetails = async () => {

            try {

                const res = await fetch(URL)
                const data = await res.json()

                console.log(data)

                // if book has no pages specified,make them 350 by default

                let pages = null
                if (data?.description) {

                    pages = data?.description[0]?.pages

                } else {
                    pages = 350
                }

                const details = {
                    title: data.title,
                    desc: data.description.value,

                    id: data.key.split("/")[2],
                    cover_image: `https://covers.openlibrary.org/b/id/${data?.covers[0]}-l.jpg`,
                    pages
                }

                setBook(details)

            } catch (error) {
                console.log(error)
            }

        }

    })

    // useEffect(() => {
    // const fetchReviews = async () => {


    // try {

    // const res = await fetch(`http://localhost:3000/api/review?bookId=${id}`)

    // const data = await res.json()

    // setReviews(data)

    // } catch (error) {



    // console.log(error)
    // }

    // }
    // fetchReviews()

    // }, [book])

    const handleShowModal = () => setShowModal(true)
    const handleHideModal = () => setShowModal(false)

    // const IncreaseAddBook = ({})=>{
    //  const dispatch = useDispatch()

    //  const addBook = useCallback(() => dispatch({type : 

    // addBook}),[] )

    // }







    return (

        <div className={styles.container}>
            <div className={styles.wrapper}>

                <div className={styles.left}>
                    <Image className={styles.image}
                        src={book?.cover}
                        alt={book?.title}
                        width={300}
                        height={250}
                        priority={true}
                    />
                </div>

                <div className={styles.right}>

                    <div className={styles.text}>
                        <h1 className={styles.title}>{book?.title}</h1>

                        <h2 className={styles.desc}>{book?.desc.slice(0, 750)} </h2>


                        <h4>{book.link}</h4>



                    </div>




                    <div className={styles.link}>
                        <div>
                            <a className={styles.links} href="/gallery">Return To Staff Gallery </a>
                        </div>

                        <div>
                            <a className={styles.links} href="/committee">Management Committee</a>
                        </div>



                        <div>
                            <a className={styles.links} href="/accounts">Accounts section</a>
                        </div>
                        <div>
                            <a className={styles.links} href="/ppm">Pharmaceutical Product management</a>
                        </div>
                        <div>
                            <a className={styles.links} href="/health">Universal Health Coverage </a>
                        </div>

                        <div>
                            <a className={styles.links} href="/support">Partnership Support</a>
                        </div>

                        <div>
                            <a className={styles.links} href="/secretariat">General Secretariat</a>
                        </div>

                        <div>
                            <a className={styles.links} href="/logistics">Logistics</a>
                        </div>

                        <div>
                            <a className={styles.links} href="/quality">Quality control</a>
                        </div>
                    </div>

                </div>




            </div>

        </div>
    )
}

export default Details
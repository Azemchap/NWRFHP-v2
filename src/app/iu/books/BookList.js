"use client";

import React, { useState } from "react";
// import { getAllBooks } from "../lib/fake-data.js"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
// import styles from "./requestForm.module.css";

import styles from "./BookList.module.css";
import Image from "next/image";
// import styles from "../components/BookCatalog.module.css"
import { getAllBooks } from "../../../lib/request-data";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { useFetchAllBooksQuery } from '../../redux/features/books/books.Api';

const categories = [
    "choose a genre",
    "infusion",
    "tablet",
    "dressings",
    "suspensions",
    "ointments",
    "injections",
    "print",
    "kit"
];

const BookList = () => {
    const books = getAllBooks();

    // const [books, setBooks] = useState([]); //frontend fetching

    const [selectedCategory, setSelectedCategory] = useState("choose a genre");

    //  const {data:books = []} = useFetchAllBooksQuery(); //backend fetching
    // console.log(books)

    // useEffect(() => {

    //   fetch("books.json")
    //     .then(res => res.json())
    //     .then((data) => setBooks(data))

    // }, [])
    // console.log(books)

    const filteredBooks =
        selectedCategory === "choose a genre"
            ? books
            : books.filter(
                (book) => book.category === selectedCategory.toLowerCase()
            );

    console.log(filteredBooks);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h2 className={styles.header}>Our request form</h2>

                    {/* category filtering */}

                    <div className={styles.galleries}>
                        <select
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            name="category"
                            id="category"
                        >
                            {categories.map((category, index) => (
                                <option className={styles.option} key={index} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        navigation={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },

                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },

                            1180: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination, Navigation]}
                        className="swiper"
                    >
                        {filteredBooks.length > 0 &&
                            filteredBooks.map((book, index) => (
                                <SwiperSlide key={index}>
                                    <li key={index}>
                                        <Link href={`/store/${book.id}`}>
                                            <div className={styles.image}>
                                                <h4 className={styles.name}>{book.title}</h4>

                                                <Image
                                                    className={styles.img}
                                                    src={book.cover}
                                                    alt={book.title}
                                                    width={100}
                                                    height={100}
                                                />

                                                <h4>Click on the image for more details</h4>
                                            </div>

                                            <div></div>
                                        </Link>
                                    </li>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default BookList;

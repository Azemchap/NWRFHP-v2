import React from "react";

import BookList from "../iu/books/BookList.js";

import styles from "./store.module.css";

const BookListPage = (books) => {
    // const books = getAllBooks()

    return (
        <>
            <div className={styles.images}>
                <BookList books={books} />
            </div>
        </>
    );
};

export default BookListPage;

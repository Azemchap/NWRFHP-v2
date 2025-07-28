import styles from "./requestForm.module.css";

import Sidebar from "../../iu/sidebar/sidebar";
import BookDetails from "../../iu/books/BookDetails.js";
import { getBookById } from "../../../lib/request-data.js";

const BookDetailsPage = ({ params: { id } }) => {
    
    const book = getBookById(id);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.details}>
                    <div className={styles.header}>
                        <h2>welcome to our detail page</h2>
                    </div>

                    <BookDetails book={book} />

                    <Sidebar />
                </div>
            </div>
        </>
    );
};

export default BookDetailsPage;
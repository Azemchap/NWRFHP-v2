import styles from "./requestForm.module.css";
import Sidebar from "../../iu/sidebar/sidebar";
import BookDetails from "../../iu/books/BookDetails.js";
import { getBookById } from "../../../lib/request-data.js";

export const metadata = {
  title: "Book Details",
  description: "View details about the selected book",
};

const BookDetailsPage = ({ params: { id } }) => {
  const book = getBookById(id);

  if (!book) {
    return (
      <div className={styles.container}>
        <div className={styles.details}>
          <h1 className={styles.header}>Book Not Found</h1>
          <p className={styles.notFound}>
            The requested book could not be found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h1 className={styles.header}>Book Details</h1>
        <div className={styles.contentWrapper}>
          <BookDetails book={book} />
          <aside className={styles.sidebar}>
            <Sidebar />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;

import Link from "next/link";
import BookCard from "./BookCard";
// import styles from "./books.module.css";
// import Sidebar from "../../iu/sidebar/Sidebar";

const BookDetails = ({ book }) => {
    return (
        <div>
            <div>
                <BookCard key={book.id} book={book} />
            </div>


        </div>
    );
};
export default BookDetails;
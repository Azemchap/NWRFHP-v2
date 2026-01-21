import styles from "./BookCard.module.css";
import AddToCart from "./AddToCart.js";
import Image from "next/image";
import Link from "next/link";
import { SparklesIcon, TruckIcon } from "@heroicons/react/24/outline";
// import Sidebar from "../../iu/sidebar/Sidebar";

const BookCard = ({ book }) => {
  return (
    <div
      className="container-fluid container mx-auto pt-16 "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className={styles.container}>
        <Link className={styles.link} href={`/store/${book.id}`}>
          <div className={styles.imag}>
            {/* <h2 className={styles.title}> {book.title}</h2> */}

            <div className={styles.cardImag}>
              <Image
                className="mr-2 rounded-md"
                src={book.cover}
                alt={book.title}
                width={100}
                height={100}
                style={{ height: "100px", width: "auto" }}
                priority={true}
              />
            </div>

            <div className={styles.icon}>
              <h2 className={styles.title}> {book.title}</h2>

              <h2 className={styles.title}>{book.desc}</h2>

              <h2 className={styles.title}>Unit: {book.unit}</h2>

              <h2 className={styles.title}>Selling price : {book.sellPrice}</h2>

              <button className={styles.title}>Click the icon to buy </button>

              <div className={styles.addCards}>
                <AddToCart book={book} />
              </div>
              <div className={styles.Sidebar}></div>
              {/* <Sidebar /> */}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;

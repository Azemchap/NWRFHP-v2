import { getAllBooks } from "../../../lib/request-data";
import Image from "next/image";
import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../context";
import styles from "./cart.module.css";

const OrderDetails = () => {
    const books = getAllBooks();

    const { cartData } = useContext(StoreContext);

    const booksToBuy = cartData.filter((book) => {
        return book.type === "Buy";
    });

    const PriceToBuy = booksToBuy.reduce(
        (accumulate, book) => accumulate + book.sellPrice,
        0
    );

    return (
        <div>
            <div>
                <div>
                    <div className="mt-8">
                        <div className="flow-root">
                            {cartData.length > 0 ? (
                                <ul role="list">
                                    {cartData.map((book) => (
                                        <li key={book?._id}>
                                            <div className={styles.cart}>
                                                <div className={styles.cartImage}>
                                                    <Image
                                                        src={book.cover}
                                                        alt=""
                                                        width={150}
                                                        height={100}
                                                        className={styles.Image}
                                                    />
                                                </div>

                                                <div>
                                                    <h2 className={styles.titles}>{book.title}</h2>

                                                    <h3 className={styles.titles}>
                                                        Category : {book?.category}
                                                    </h3>
                                                    <h3 className={styles.titles}>
                                                        Unit : {book.unit}
                                                    </h3>

                                                    <h3 className={styles.titles}>
                                                        Price : {book.sellPrice}
                                                    </h3>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No book found</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="border-t">
                    <div className="flex justify-between">
                        <p>Subtotal</p>

                        {
                            <ul>
                                <li>
                                    Buying {booksToBuy.length} items for {PriceToBuy} FR CFA
                                </li>
                            </ul>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;

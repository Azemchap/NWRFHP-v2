"use client";
import styles from "./cart.module.css";
import React from "react";
import OrderDetails from "../../iu/cart/OrderDetails";
// import Payment from "../../iu/Cart/Payment"

const CartPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.header}>Welcome To Our Results Page </h1>

                <div className={styles.order}>
                    <OrderDetails />

                    {/* <Payment/> */}
                </div>

                <h3 className={styles.body}>
                    Thanks a lot for your purchase. Please click the contact button to chat with the
                    officer in charge of our bills
                </h3>

                <div className={styles.link}>
                    <a href="/store">Return to store</a>
                    <a href="/contact">Contact our sales officer</a>
                </div>
            </div>
        </div>
    );
};

export default CartPage;

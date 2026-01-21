"use client";
import { ShoppingBagIcon, TruckIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import styles from "./Books.module.css";
import { useContext } from "react";
import { StoreContext } from "../../context";

const AddToCart = ({ book }) => {
  const { cartData, setCartData } = useContext(StoreContext);

  const handleCart = (e, reason) => {
    e.preventDefault();

    const newData = { ...book, type: reason };
    setCartData([...cartData, newData]);

    // alert(cartData)

    toast.success(`Added ${newData.title} to the cart`, {
      autoClose: 1000,

      // position:toast.POSITION.TOP_RIGHT
    });
  };

  return (
    <div className="flex justify-around mt-5 border-t-2 p-1">
      <button
        className={styles.buy}
        onClick={(event) => handleCart(event, "Buy")}
      >
        <TruckIcon className={styles.icon} />
        Buy
      </button>

      {/* <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2"

                onClick={(event) => handleCart(event, "Rent")}>

                <ShoppingBagIcon className={styles.icon} />

                to rent</button>
 */}
    </div>
  );
};
export default AddToCart;

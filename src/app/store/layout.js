// import Sidebar from "../iu/sidebar/Sidebar";
import styles from "./store.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StoreProvider from "../provider";

export const metadata = {
    Title: "NWRFHP-buy and rent books",
    Description: "An on line bookstore to sell and rent used books",
};

export default function BookStoreLayout({ children }) {
    return (
        <StoreProvider>
            <div className={styles.main}>
                <div className={styles.main}>
                    {/* < Sidebar />  */}

                    {children}

                    <ToastContainer />
                </div>
            </div>
        </StoreProvider>
    );
}
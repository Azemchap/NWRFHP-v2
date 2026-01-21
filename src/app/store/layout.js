import styles from "./store.module.css";
import StoreProvider from "../provider";
import { Toaster } from "sonner";

export const metadata = {
    title: "NWRFHP - Buy and Rent Books",
    description: "An online bookstore to sell and rent used books",
};

export default function BookStoreLayout({ children }) {
    return (
        <StoreProvider>
            <div className={styles.main}>
                {children}
                <Toaster position="bottom-right" />
            </div>
        </StoreProvider>
    );
}
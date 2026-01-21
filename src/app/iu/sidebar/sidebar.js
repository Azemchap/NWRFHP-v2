import React from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
// import Logo from "./Logo";
import styles from "./sidebar.module.css";

const Sidebar = () => {
    return (
        <div>
            <Link href="/store" className={styles.logo}>
                {/* <div className={styles.loops}>
        <Logo />
       </div> */}
            </Link>

            <div className={styles.sideBar}>
                <NavLinks />

                <form>
                    <button className="flex items-center hover:bg-sky-100 hover:text-purple-600 md:flex-none md:justify-start flex-grow justify-center gap-2 rounded-md">
                        {/* Sing out */}
                    </button>
                </form> 
            </div>
        </div>
    );
};

export default Sidebar;

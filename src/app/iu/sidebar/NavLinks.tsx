"use client"

import React from 'react'
import { useContext } from 'react';
import { StoreContext } from '../../context';

import Link from 'next/link';

import { BookOpenIcon, CogIcon, CubeTransparentIcon, HomeIcon, SparklesIcon, ShoppingBagIcon, ShoppingCartIcon, TruckIcon, UserGroupIcon } from '@heroicons/react/outline';

// import { BookOpenIcon,  HomeIcon,  ShoppingBagIcon,  } from '@heroicons/react/outline';


import styles from "./sidebar.module.css"


const links = [

    { name: "Return Home", href: "/", icon: HomeIcon },

    { name: "Return To Store", href: "/store", icon: BookOpenIcon },

    { name: "Check Results", href: "/store/cart", icon: ShoppingBagIcon },

    // { name: "Sell or lend", href: "/store/sell-lend", icon: SparklesIcon },

    // { name: "Track Order", href: "/store/track", icon: TruckIcon },

    // { name: "Community", href: "/store/community", icon: UserGroupIcon },

    // { name: "Settings", href: "/store/settings", icon: CogIcon },

    { name: "Contact", href: "/contact", icon: ShoppingCartIcon },

    // { name: "Admin", href: "/store/admin", icon: CubeTransparentIcon },

];

const NavLinks = () => {

    const { cartData } = useContext(StoreContext)


    return (
        <div className={styles.links}>

            {
                links.map((link) => {

                    const IconComponent = link.icon;

                    return (

                        <Link
                            key={link.name}
                            href={link.href}
                            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md">

                            <div className={styles.names}>
                                <IconComponent className={styles.icon} />
                                {(Link.name === "cart" && cartData && cartData.length > 0) ? `${Link.name} (${cartData.length})` : <p className={styles.hidden}>{link.name}</p>}


                            </div>

                        </Link>

                    )
                })
            }




        </div>


    )
}

export default NavLinks

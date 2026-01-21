"use client"

import React from 'react'
import { useContext } from 'react';
import { StoreContext } from '../../context';

import Link from 'next/link';

import { BookOpen, Settings, Box, Home, Sparkles, ShoppingBag, ShoppingCart, Truck, Users } from 'lucide-react';


import styles from "./sidebar.module.css"


const links = [
    { name: "Return Home", href: "/", icon: Home },
    { name: "Return To Store", href: "/store", icon: BookOpen },
    { name: "Check Results", href: "/store/cart", icon: ShoppingBag },
    { name: "Contact", href: "/contact", icon: ShoppingCart },
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

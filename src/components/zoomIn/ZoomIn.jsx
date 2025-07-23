"use client"

import React, { useEffect } from 'react';
import "./zoomIn.css";
import classNames from 'classnames';
import Image from 'next/image';

const Slide = ({ children, image, zoomClass }) => {
    return (
        <div className={classNames(zoomClass, "number-cards")}>
            <h6>{children}</h6>
            <Image
                className='img'
                alt="Slider Image"
                width={500}
                height={500}
                src={image}
                priority={false}
            />
        </div>
    );
};

export default function App() {
    const slides = [
        {
            title: "Inside The North West Regional Fund For Health Promotion",
            image: "/images/head-office.jpg"
        },
        {
            title: "Office Of The Administrator",
            image: "/images/admin.jpg"
        },
        {
            title: "Head Of Section For Administration And Finance",
            image: "/images/maggia.jpg"
        },
        {
            title: "Office Of The Internal Auditor",
            image: "/images/auditor.jpg"
        },
        {
            title: "Office Of The Administrative Assistant",
            image: "/images/adminasis.jpg"
        },
        {
            title: "Head Of Unit Accounts And Finance",
            image: "/images/seph.jpg"
        },
        {
            title: "Office OF The Head Of Unit For Supervision And Distribution",
            image: "/images/joe.jpg"
        },
        {
            title: "Office OF The Computerized Stock Management",
            image: "/images/stock.jpg"
        },
        {
            title: "Office OF The Logistics Unit",
            image: "/images/logistics.jpg"
        },
        {
            title: "The Warehouse Of The Regional Fund For Health Promotion",
            image: "/images/096A0566.jpg"
        },
        {
            title: "Office Of The Laboratory Unit Of The Fund",
            image: "/images/ndzi1.jpg"
        },
        {
            title: "Sub-Store For Public Health Programmes",
            image: "/images/hiv-medicines.jpg"
        },
        {
            title: "Kumbo Sub-store In Bui Division Of The N.W. Region",
            image: "/images/brenda.jpg"
        },
        {
            title: "Wum Sub-store In Menchum Division Of The N.W. Region",
            image: "/images/nwa.jpg"
        },
        {
            title: "Nkambe Sub-store In Donga And Mantung Division Of The N.W. Region",
            image: "/images/delivery-beds.jpg"
        },
        {
            title: "We Wish You A Happy Stay With Us As You Continue To Discover Who We Are",
            image: "/images/social1.jpg"
        }
    ];


    useEffect(() => {
        const intervalId = setInterval(zoomAnimation, 15000);
        return () => clearInterval(intervalId);
    }, []);

    const zoomAnimation = () => {
        const currentSlide = slides[currentIndex % slides.length];
        currentIndex += 1;

        // Reset to start from first slide
        if (currentIndex > slides.length) {
            currentIndex = 0;
        }

        // Update display and add zoom class
        currentSlide.element.style.display = "flex";
        currentSlide.element.classList.add("zoom");
    };

    let currentIndex = 0;

    return (
        <div className='app-man'>
            <div className='anim'>
                {slides.map((slide, index) => (
                    <Slide key={index} image={slide.image}>
                        {slide.title}
                    </Slide>
                ))}
            </div>
        </div>
    );
}


"use client"
import React, { useEffect } from 'react';
import "./zoomIn.css"
import classNames from 'classnames';
import Image from 'next/image'

function App() {

    useEffect(() => {
        zoomAnimation();
    }, []);


    const zoomAnimation = () => {

        /**
 * Initialize index to count from
 */
        var slideIndex = 0;

        /**
         * Run animation method
         */
        showSlides();

        /**
         * Animation method
         */
        function showSlides() {
            var i;
            /**
             * Store all elments in an array
             */
            var slidesObj = document.getElementsByClassName("number-cards");
            var slides = Array.from(slidesObj);

            /**
             * Make all elements invisible 
             */
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            /**
             * increment slideIndex and make sure  
             * slideIndex is reset to 1 when count goes 
             * beyond array lenght
             */
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }

            /**
             * Make slide index at index slideIndex - 1 in array visible
             * by making it visible (display: flex)
             */
            slides[slideIndex - 1].style.display = "flex";

            /**
             * Add class name zoom which makes the object 
             * undergo the animation described in the zoom class
             */
            slides[slideIndex - 1].classList.add("zoom");

            /**
             * Run this method every 4 seconds
             */
            setTimeout(showSlides, 15000);

            return (
                <div>Animate</div>
            )
        }



    }

    return (

        <div className='app-man'>

            <div className='anim'>

                <div className="man">

                    <div className={classNames("zoom", "number-cards")}>

                        <h6>Inside The North West Regional Fund For Health Promotion</h6>

                        <Image className='img'
                            alt="slider image" width={500} height={500}
                            src="/images/head-office.jpg"
                        />

                    </div>


                    <div className={classNames("zoom", "number-cards")}>

                        <h6>Office Of The Administrator</h6>

                        <Image className='img'
                            alt="slider image" width={500} height={500}
                            src="/images/admin.jpg"
                        />

                    </div>

                    <div className={classNames("zoom", "number-cards")}>

                        <h6> Head Of Section For Administration And Finance</h6>

                        <Image className='img'
                            alt="slider image" width={500} height={500}
                            src="/images/maggia.jpg"
                        />

                    </div>

                    <div className={classNames("zoom", "number-cards")}>

                        <h6>Office Of The Internal Auditor</h6>

                        <Image className='img'
                            alt="slider image" width={500} height={500}
                            src="/images/auditor.jpg"
                        />

                    </div>

                    <div className={classNames("zoom", "number-cards")}>

                        <h6>Office Of The Administrative Assistant</h6>

                        <Image className='img'
                            alt="slider image" width={500} height={500}
                            src="/images/adminasis.jpg"
                        />

                    </div>

                    <div className={classNames("zoom", "number-cards")}>

                        <h6>Head Of Unit Accounts And Finance </h6>

                        <Image className='img'
                            alt="slider image" width={500} height={500}
                            src="/images/seph.jpg"
                        />

                    </div>

                    <div className={classNames("zoom", "number-cards")}>

                        <h6>Office OF The Head Of Unit For Supervision And Distribution </h6>

                        <Image className='img'
                            alt="slider image" width={500} height={500}
                            src="/images/joe.jpg"
                        />

                    </div>


                    <div className={classNames("zoom", "number-cards")}>

                        <h6>Office OF The Computerized Stock Management </h6>

                        <Image className='img'
                            alt="slider image" width={500} height={500}
                            src="/images/stock.jpg"
                        />

                    </div>

                    <div className={classNames("zoom", "number-cards")}>

                        <h6>Office OF The Logistics Unit </h6>

                        <Image className='img'
                            alt="slider image" width={500} height={500}
                            src="/images/logistics.jpg"
                        />

                    </div>

                    <div className={classNames("zoom", "number-cards")}>

                        <h6>The Warehouse Of The Regional Fund For Health Promotion </h6>

                        <Image className='img'
                            alt="slider image" width={500} height={500}
                            src="/images/096A0566.jpg"
                        />

                    </div>

                    <div className={classNames("zoom", "number-cards")}>

                        <h6>Office Of The Laboratory Unit Of The Fund </h6>

                        <Image className='img'
                            alt="slider image" width={500} height={500}
                            src="/images/ndzi1.jpg"
                        />

                    </div>


                    <div className={classNames("zoom", "number-cards")}>

                        <h6>Sub-Store For Public Health Programmes </h6>

                        <Image className='img'
                            alt="slider image" width={500} height={500}
                            src="/images/hiv-medicines.jpg"
                        />

                    </div>

                    <div className={classNames("zoom", "number-cards")}>

                        <h6>Kumbo Sub-store In Bui Division Of The N.W. Region </h6>

                        <Image className='img'
                            alt="slider image" width={500} height={500}
                            src="/images/brenda.jpg"
                        />

                    </div>

                    <div className={classNames("zoom", "number-cards")}>

                        <h6>Wum Sub-store In Menchum Division Of The N.W. Region </h6>

                        <Image className='img'
                            alt="slider image" width={500} height={500}
                            src="/images/nwa.jpg"
                        />

                    </div>

                    <div className={classNames("zoom", "number-cards")}>

                        <h6>Nkambe Sub-store In Donga And Mantung Division Of The N.W. Region </h6>

                        <Image className='img'
                            alt="slider image" width={500} height={500}
                            src="/images/delivery-beds.jpg"
                        />

                    </div>


                    <div className={classNames("zoom", "number-cards")}>

                        <h6>We Wish You A Happy Stay With Us As You Continue To Discover Who We Are </h6>

                        <Image className='img'
                            alt="slider image" width={500} height={500}
                            src="/images/social1.jpg"
                        />

                    </div>
                </div>
            </div>
        </div>


    );
}
export default App

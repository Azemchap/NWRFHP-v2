"use client"

import React, { useCallback, useState, useEffect } from 'react'
import styles from "./coverage.module.css";
import "../../components/zoomIn/zoomIn.css"
import classNames from 'classnames';
import Image from 'next/image'
// import "../../components/zoomIn.css"


const Coverage = () => {

    const [text, setText] = useState("")

    const [isExpanded, setIsExpanded] = useState(false)
    const toggleIsExpanded = useCallback(() => {
        setIsExpanded((isExpanded) => !isExpanded);
    }, []);


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
             * Run this method every 5 seconds
             */
            setTimeout(showSlides, 15000);

            return (
                <div>Animate</div>
            )
        }



    }









    return (

        <div className={styles.parent}>
            <div className={styles.wrapper}>
                <div className={styles.lad}>
                    <div className={styles.logu}>
                        <Image className={styles.logIMG} src="/images/logu1.jpg" alt="logu1" width={400} height={300} />
                    </div>
                    <div>
                        <div className={styles.welcome}>
                            <h1>Welcome to </h1>
                            <h1>Universal Health Coverage </h1>
                            <h1> Section.</h1>
                            <h1>The umbrella of quality and affordable health care.</h1>
                        </div>
                        <div className={styles.advert}>
                            <h2>Universal Health Coverage covers; </h2>
                            <h2>five packages of health care services, </h2>
                            <h2>Subsidized by State Budget</h2>
                        </div>
                    </div>
                </div>

                <div className={styles.visit}>

                    <h1 className={styles.strength}>Our staff strength</h1>
                    <a className={styles.btn} href="/gallery" >Visit our staff gallery </a>

                </div>


                <div className={styles.btns}>
                    <button className={styles.btn} onClick={toggleIsExpanded}>Read more and click again</button>
                </div>

                <div className={styles.collapse} style={{ height: isExpanded ? "600px" : "0px" }}>




                    <div className='app-man'>

                        <div className='anim'>

                            <div className="man">

                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        <h6>North West Regional Fund For Health Promotion</h6>

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/head-office.jpg"
                                        />
                                        <div className={styles.infos}>
                                            <h6>Come to the north west Regional Fund </h6>
                                            <h6>For Health Promotion (PIG) Bamenda</h6>
                                            <h6>in the North West Region</h6>
                                            <h6>of Cameroon</h6>
                                            <h6>and get more clarification on</h6>
                                            <h6>Universal Health Coverage</h6>



                                        </div>

                                    </div>

                                </div>


                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        <h6>Office Of The Administrator</h6>

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/admin.jpg"
                                        />
                                    </div>

                                </div>

                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        <h6> Head Of Section For Universal Health Coverage</h6>

                                        <Image className='img'
                                            alt="slider image" width={200} height={200}
                                            src="/images/yembe.jpg"
                                        />

                                    </div>

                                </div>


                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        <h6> Chief of Administration And Finance For Universal Health Coverage</h6>

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/evans.jpg"
                                        />
                                    </div>
                                </div>


                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        <h6> Office of the Medical Adviser</h6>

                                        <Image className='img'
                                            alt="slider image" width={200} height={200}
                                            src="/images/drning2.jpg"
                                        />
                                    </div>
                                </div>


                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        <h6> Focal Point and head of unit for Universal Health Coverage </h6>

                                        <Image className='img'
                                            alt="slider image" width={200} height={200}
                                            src="/images/eleen.jpg"
                                        />
                                    </div>
                                </div>


                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        <h6>  Head of unit for  Health Voucher </h6>

                                        <Image className='img'
                                            alt="slider image" width={200} height={200}
                                            src="/images/ayaba.jpg"
                                        />
                                    </div>

                                </div>

                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        <h6> Pharmacist Adviser  Universal Health Coverage</h6>

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/nwa.jpg"
                                        />
                                    </div>
                                </div>


                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        <h6> Office of the Input Operator</h6>

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/mfuh.jpg"
                                        />
                                    </div>
                                </div>

                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        <h6> Health Voucher</h6>

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/voucher.jpg"
                                        />
                                        <div className={styles.infos}>
                                            <h6>Health Vouchers Can also be bought by</h6>
                                            <h6>CLERGY MEN</h6>
                                            <h6>PARLIAMENTARIANS</h6>
                                            <h6>MAYORS</h6>
                                            <h6>BUSINESS MEN</h6>
                                            <h6>ETC</h6>
                                        </div>

                                    </div>
                                </div>



                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        <h6> Health Voucher</h6>

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/voucher.jpg"
                                        />
                                        <div className={styles.infos}>
                                            <h6>Buy your Health Voucher now and </h6>
                                            <h6>deliver safeLy</h6>
                                            <h6>in the North West Region</h6>
                                            <h6>of Cameroon</h6>
                                            <h6>It is FCFA 6000 FRS A Ticket</h6>
                                            <h6><b>only</b></h6>



                                        </div>

                                    </div>
                                </div>



                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        <h6> Health Voucher</h6>

                                        <Image className='img'
                                            alt="slider image" width={200} height={200}
                                            src="/images/logu.jpg"
                                        />
                                        <div className={styles.infos}>
                                            <h6>Get registered with The  </h6>
                                            <h6>Universal Health Coverage</h6>
                                            <h6>and stay under an Umbrella</h6>
                                            <h6>of free <b>quality health services</b> </h6>

                                        </div>
                                    </div>
                                </div>



                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        <h6> Marketing/Communication</h6>

                                        <Image className='img'
                                            alt="slider image" width={200} height={200}
                                            src="/images/ebolowa1.jpg"
                                        />
                                        <div className={styles.infos}>
                                            <h6>Creating awareness  </h6>
                                            <h6>enables the population</h6>
                                            <h6>to benefit from</h6>
                                            <h6> free quality health services</h6>

                                        </div>

                                    </div>
                                </div>



                                <div className={classNames("zoom", "number-cards")}>
                                    <div className={styles.show}>

                                        <h6> Training</h6>

                                        <Image className='img'
                                            alt="slider image" width={200} height={200}
                                            src="/images/ebolowa2.jpg"
                                        />
                                        <div className={styles.infos}>
                                            <h6>Proper training is  </h6>
                                            <h6>needed by staff to</h6>
                                            <h6>execution </h6>
                                            <h6> free <b>quality health services</b> </h6>

                                        </div>

                                    </div>
                                </div>



                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        <h6>Delivery beds</h6>

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/delivery.jpg"
                                        />
                                        <div className={styles.infos}>
                                            <h6>To accomplish our  </h6>
                                            <h6>Health Voucher objectives, </h6>
                                            <h6>we Need good quality </h6>
                                            <h6>delivery beds. </h6>

                                        </div>

                                    </div>
                                </div>



                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        <h6>Women v/s Health Voucher</h6>

                                        <Image className='img'
                                            alt="slider image" width={200} height={200}
                                            src="/images/social11.jpg"
                                        />
                                        <div className={styles.infos}>
                                            <h6>The Women must be well </h6>
                                            <h6>informed about </h6>
                                            <h6>Health Voucher</h6>

                                        </div>

                                    </div>
                                </div>


                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        <h6>Marketing</h6>

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/ndehca.jpg"
                                        />
                                        <div className={styles.infos}>
                                            <h6>Marketing Of  </h6>
                                            <h6>Health Voucher activities </h6>
                                            <h6>are done everywhere</h6>

                                        </div>

                                    </div>
                                </div>


                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        <h6>Management Committee</h6>

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/management1.jpg"
                                        />
                                        <div className={styles.infos}>
                                            <h6>Activities of   </h6>
                                            <h6>Universal Health Coverage </h6>
                                            <h6>are over seen by a Management Committee</h6>

                                        </div>

                                    </div>
                                </div>

                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        <h6>Office Of the Cashier</h6>

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/ndum.jpg"
                                        />
                                        <div className={styles.infos}>
                                            <h6>Activities of   </h6>
                                            <h6>Universal Health Coverage </h6>
                                            <h6>involves honesty</h6>

                                        </div>

                                    </div>
                                </div>


                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        <h6> Community participation</h6>

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/front1.jpg"
                                        />
                                    </div>
                                </div>

                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        <h6> Community participation</h6>

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/front2.jpg"
                                        />
                                    </div>
                                </div>

                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        <h6> Community participation</h6>

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/front3.jpg"
                                        />
                                    </div>
                                </div>

                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        <h6> Community participation</h6>

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/front4.jpg"
                                        />
                                    </div>
                                </div>

                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/voucher1.jpg"
                                        />
                                    </div>
                                </div>

                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/voucher6.jpg"
                                        />
                                    </div>
                                </div>

                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/voucher7.jpg"
                                        />
                                    </div>
                                </div>

                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                    

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/voucher8.jpg"
                                        />
                                    </div>
                                </div>

                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/voucher9.jpg"
                                        />
                                    </div>
                                </div>

                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                    

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/voucher10.jpg"
                                        />
                                    </div>
                                </div>

                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>


                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/voucher11.jpg"
                                        />
                                    </div>
                                </div>

                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/voucher30.jpg"
                                        />
                                    </div>
                                </div>

                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                    

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/voucher13.jpg"
                                        />
                                    </div>
                                </div>

                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                    

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/voucher14.jpg"
                                        />
                                    </div>
                                </div>

                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/voucher15.jpg"
                                        />
                                    </div>
                                </div>

                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/voucher16.jpg"
                                        />
                                    </div>
                                </div>

                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/voucher17.jpg"
                                        />
                                    </div>
                                </div>

                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                    

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/voucher18.jpg"
                                        />
                                    </div>
                                </div>

                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/voucher29.jpg"
                                        />
                                    </div>
                                </div>

                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                    

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/voucher20.jpg"
                                        />
                                    </div>
                                </div>

                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/voucher21.jpg"
                                        />
                                    </div>
                                </div>

                                <div className={classNames("zoom", "number-cards")}>

                                    <div className={styles.show}>

                                        

                                        <Image className='img'
                                            alt="slider image" width={280} height={200}
                                            src="/images/voucher22.jpg"
                                        />
                                    </div>
                                </div>


















                            </div>
                        </div>
                    </div>




                </div>



                <div className={styles.card5}>
                    <div className={styles.card1}>
                        <div className={styles.public}>

                            <h1 className={styles.texts}>Our staff keeps working very hard to make your health better.</h1>
                        </div>
                        {/* <h2 className={styles.card}>to make your health better.</h2> */}
                    </div>
                    <h3 className={styles.card7}>We are blessed with a well trained and committed staff ready to execute all the activities of the five packages of <b>Universal Health Coverage</b> in the north west region of Cameroon.</h3>

                </div>

                <div>
                    {/* <h2 className={styles.text}>man</h2> */}
                </div>


                <div>
                    {/* <h2 className={styles.text}>man</h2> */}
                </div>


                <div>
                    {/* <h2 className={styles.text}>man</h2> */}
                </div>







                {/* // section one general public */}




                <h2 className={styles.benefit}>Beneficiaries And Interventions</h2>



                <div className={styles.btns}>
                    <button className={styles.btn} onClick={toggleIsExpanded}>Read more and click again</button>
                </div>

                <div className={styles.collapse} style={{ height: isExpanded ? "500px" : "0px" }}>

                    <h1 className={styles.socials}>UHC Interventions include</h1>

                    <div className={styles.social}>
                        <h2 className={styles.number}>01</h2>
                        <h2>Consultation for children 0-5 years.</h2>
                        
                    </div>

                    <div className={styles.social}>
                        <h2 className={styles.number}>02</h2>
                        <h2>User fee</h2>
                    </div>

                    <div className={styles.social}>
                        <h2 className={styles.number}>03</h2>
                        <h2>Tuberculosis & HIV Management</h2>
                    </div>

                    <div className={styles.social}>
                        <h2 className={styles.number}>04</h2>
                        <h2>Health Voucher</h2>
                    </div>

                    <div className={styles.social}>
                        <h2 className={styles.number}>05</h2>
                        <h2>Hemodialysis</h2>
                    </div>
                </div>

                <div>
                    <div className={styles.card4}>
                        <div className={styles.public}>
                            <h1 className={styles.text}>01</h1>
                            <h1 className={styles.texts}>The general public is free to get registered and benefit from health services free of charge.</h1>
                        </div>
                        {/* <h2 className={styles.card}>health services free of charge .</h2> */}
                    </div>
                    <h3 className={styles.card7}>preventive and promotional services on the various health topics in all the enrolled Government facilities </h3>

                </div>

                <div>
                    {/* <h2 className={styles.text}>man</h2> */}
                </div>


                <div>
                    {/* <h2 className={styles.text}>man</h2> */}
                </div>


                <div>
                    {/* <h2 className={styles.text}>man</h2> */}
                </div>




                {/* section two children with malaria */}




                <button className={styles.btn} onClick={toggleIsExpanded}>Read more and click again</button>

                {/* <div className={styles.height}> */}

                <div className={styles.collapse} style={{ height: isExpanded ? "1250px" : "0px" }}>


                    <div className={styles.container}>
                        <main className={styles.main}>
                            <div className={styles.wrapper}>
                                {/* <h1>Responsive table</h1> */}

                                <table className={styles.table}>
                                    <caption className={styles.caption}><h3>Services and Indicator for Children aged 0 to 5 years</h3>

                                    </caption>


                                    <tr className={styles.header}>

                                        <th className={styles.header}>S/N</th>
                                        <th className={styles.header}>Services</th>
                                        <th className={styles.header}>Indicator of 0 to 5yrs service provision</th>
                                        <th className={styles.header}>Verification Means</th>
                                        <th className={styles.header}>Description of Indicator</th>

                                    </tr>

                                    <tr className={styles.data}>

                                        <td className={styles.data} data-cell="S/N">o1</td>

                                        <td className={styles.data} data-cell="Services">Consultation of Children 0 to 5 years</td>

                                        <td className={styles.data} data-cell="Indicators of 0 to 5yrs service provision">Number of Children aged 0 to 5 years received for medical consultation</td>

                                        <td className={styles.data} data-cell="Verification means">Children Consultation Register</td>


                                        <td className={styles.data}
                                            data-cell="Description of Indicator"><p>Any consultation of children aged 0 to 5 years made by a doctor for a new episode of illness</p><p>If a patient is seen by several doctors for the same episode of illness it should be counted once</p></td>




                                    </tr>


                                </table>
                            </div>



                        </main>
                    </div>



                </div>


                {/* </div> */}


                <div>
                    <div className={styles.card6}>
                        <div className={styles.public}>
                            <h1 className={styles.text}>02</h1>
                            <h1 className={styles.texts}>Children from 0 - 5 years are consulted and treated for malaria Free of charge.<b>Do not miss this opportunity</b></h1>
                        </div>
                        {/* <h2 className={styles.card}>Free of charge - <b>Do not miss this opportunity</b></h2> */}
                    </div>
                    {/* <h3 className={styles.card2}><a className={styles.lad2} href="./contact">Contact us for more information</a></h3> */}

                </div>

                <div>
                    {/* <h2 className={styles.text}>man</h2> */}
                </div>


                <div>
                    {/* <h2 className={styles.text}>man</h2> */}
                </div>


                <div>
                    {/* <h2 className={styles.text}>man</h2> */}
                </div>




                {/* health voucher section three*/}




                <button className={styles.btn} onClick={toggleIsExpanded}>Read more and click again</button>

                <div className={styles.collapse} style={{ height: isExpanded ? "2772px" : "0px" }}>


                    <div className={styles.dialysis}>

                        <h1 className={styles.pregnant}>Breaking news.</h1>
                        <div className={styles.pred}>

                            <Image src="/images/voucher.jpg" alt="voucher" width={350} height={200} />
                            <h1 className={styles.pregnant}>Health voucher</h1>
                            <h3>--- This breaking news is for all expecting mothers and those who sympathize with them.</h3>
                            <h3>--- Expecting mothers who listen and fulfill all the follow up steps will give birth in complete safety and cheaper rate than expected.</h3>
                            <h3>--- At first expecting mothers will spend up to FCFA 60,000 FRS from between conception and 42 days after delivery.</h3>
                            <h3>--- Today the Government of Cameroon through the Ministry of Public health in partnership with the North West Regional Fund F0r Health Promotion (Pig) Bamenda, has decided to subvent this cost from State budget by 90%.</h3>
                            <h3>--- This means that an expecting mother now spend only FCFA 6000FRS from the period of conception up to 42 days after delivery.</h3>
                        </div>
                        <div className={styles.pred}>
                            <h1 className={styles.pregnant}>How to become a beneficiary.</h1>
                            <h3>--- Go to a health facility that is implementing the health voucher system and get registered for FCFA 6000FRS.</h3>
                            <h3>--- You will be given a check called health voucher.</h3>
                            <h3>--- This health voucher contains seven detachable tickets called coupons. Make sure you do not misplace it.</h3>
                        </div>

                        <div className={styles.pred}>
                            <h1 className={styles.pregnant}>How dose it work ?</h1>
                            <h3>--- once you obtain a health voucher, you shall benefit from:</h3>
                            <h3>--- Free consultations each time you attend antenatal clinic <mark>1,2,3,& 4.</mark></h3>
                            <h3>--- You shall be transported to the hospital free of charge in cases of emergencies.</h3>
                            <h3>--- You shall have free treatment for any health conditions that is related to the pregnancy between conception up to 42 days after delivery. </h3>
                        </div>
                        <div className={styles.pred} >
                            <h1 className={styles.pregnant}> What is this project for ? </h1>
                            <h3>--- To stop many women from delivering at home</h3>
                            <h3>--- To prevent frequent mother and child mortality</h3>
                            <h3>--- To alleviate suffering</h3>
                            <h3>--- To promote quality health care through safe delivery</h3>
                        </div>

                        <div className={styles.pred}>
                            <h1 className={styles.pregnant}>Who can buy the health voucher ?</h1>
                            <h2>The following stake holders can buy and share to the needy population</h2>
                            <div className={styles.holders}>
                                <h3>QUARTER HEADS</h3>
                                <h3>CLERGY MEN</h3>
                                <h3>PARLIAMENTARIANS</h3>
                                <h3>MAYORS</h3>
                                <h3>BUSINESS MEN</h3>
                                <h3>FRIENDS</h3>
                                <h3>MEETING GROUPS</h3>
                            </div>
                        </div>
                        <div>
                            <a className={styles.lad2} href="/contact">More information</a>
                        </div>



                    </div>
                </div>

                <div>
                    <div className={styles.card1}>
                        <div className={styles.public}>
                            <h1 className={styles.text}>03</h1>
                            <h1 className={styles.texts}>Pregnant Women + new born not older than 42 days, will pay FCFA 6,000/Pregnancy.</h1>
                        </div>
                        {/* <h2 className={styles.card}>(FCFA 6,000/Pregnancy)</h2> */}
                    </div>
                    <h3 className={styles.card7}>Antenatal consultations
                    </h3>

                    <h3 className={styles.card7}>Childbirth(even if Complication requiring a caesarean section)
                    </h3>
                    <h3 className={styles.card7}>Care of a new born up to 42 days old
                    </h3>

                    {/* <h3 className={styles.card2}><a className={styles.lad2} href="./contact">Contact us for more information</a>
                    </h3> */}

                </div>

                <div>
                    {/* <h2 className={styles.text}>man</h2> */}
                </div>


                <div>
                    {/* <h2 className={styles.text}>man</h2> */}
                </div>


                <div>
                    {/* <h2 className={styles.text}>man</h2> */}
                </div>



                {/* section for no user fee general */}


                <button className={styles.btn} onClick={toggleIsExpanded}>Read more and click again</button>

                <div className={styles.collapse} style={{ height: isExpanded ? "2125px" : "0px" }}>

                    <div className={styles.container}>
                        <main className={styles.main}>
                            <div className={styles.wrappers}>
                                {/* <h1>Responsive table</h1> */}

                                <table className={styles.table}>
                                    <caption className={styles.caption}>Services and indicators for user fees

                                    </caption>


                                    <tr className={styles.header}>

                                        <th className={styles.header}>S/N</th>

                                        <th className={styles.header}>SERVICES
                                        </th>

                                        <th className={styles.header}>INDICATORS OF HIV SERVICE PROVISION
                                        </th>

                                        <th className={styles.header}>VERIFICATION MEANS
                                        </th>

                                        <th className={styles.header}>DESCRIPTION OF INDICATORS
                                        </th>

                                    </tr>

                                    <tr className={styles.data}>

                                        <td className={styles.data} data-cell="S/N">o1</td>

                                        <td className={styles.data} data-cell="SERVICES">HIV routine consultation
                                        </td>

                                        <td className={styles.data} data-cell="INDICATORS OF HIV SERVICE PROVISION">Number of PLWHIV(children,  women, adults) received for medical consultation.
                                        </td>

                                        <td className={styles.data} data-cell="VERIFICATION MEANS ">Consultation register or medical file.
                                            ARV dispensation register preferably</td>


                                        <td className={styles.data}
                                            data-cell="DESCRIPTION OF INDICATORS"><p>One consultation per month for new patients during the first 6 months.
                                            </p><p>Stable patients will have a consultation after every 3months.
                                            </p></td>

                                    </tr>




                                    <tr className={styles.data}>

                                        <td className={styles.data} data-cell="S/N">02</td>

                                        <td className={styles.data} data-cell="SERVICES">First Antenatal consultation (ANC 1)

                                        </td>

                                        <td className={styles.data} data-cell="INDICATORS OF HIV SERVICE PROVISION">Number of pregnant women received for ANC 1

                                        </td>

                                        <td className={styles.data} data-cell="VERIFICATION MEANS ">ANC consultation register
                                        </td>


                                        <td className={styles.data}
                                            data-cell="DESCRIPTION OF INDICATORS">ANC 1 reimbursed for all pregnant women
                                        </td>

                                    </tr>




                                    <tr className={styles.data}>

                                        <td className={styles.data} data-cell="S/N">03</td>

                                        <td className={styles.data} data-cell="SERVICES">Antenatal consultation (ANC2,3 &4)

                                        </td>

                                        <td className={styles.data} data-cell="INDICATORS OF HIV SERVICE PROVISION">Antenatal Consultation (ANC2,3 &4)

                                        </td>

                                        <td className={styles.data} data-cell="VERIFICATION MEANS ">ANC consultation register
                                        </td>


                                        <td className={styles.data}
                                            data-cell="DESCRIPTION OF INDICATORS">ANC 2,3 and 4 are reimbursed for pregnant women living with HIV only.
                                        </td>

                                    </tr>




                                </table>
                            </div>


                        </main>
                    </div>






                </div>

                <div>
                    <div className={styles.card4}>
                        <div className={styles.public}>
                            <h1 className={styles.text}>04</h1>
                            <h1 className={styles.texts}>Persons living with HIV/AIDS,</h1>
                            <h1 className={styles.texts}>Tuberculosis and Ochocerciasis</h1>

                        </div>
                        <h2 className={styles.card}>Obtain free treatment in all enrolled centers</h2>
                    </div>
                    {/* <h3 className={styles.card2}><a className={styles.lad2} href="./contact">Contact us for more information</a></h3> */}

                </div>

                <div>
                    {/* <h2 className={styles.text}>man</h2> */}
                </div>


                <div>
                    {/* <h2 className={styles.text}>man</h2> */}
                </div>


                <div>
                    {/* <h2 className={styles.text}>man</h2> */}
                </div>




                {/* section for dialysis */}





                <button className={styles.btn} onClick={toggleIsExpanded}>Read more and click again</button>

                <div className={styles.collapse} style={{ height: isExpanded ? "1025px" : "0px" }}>

                    <div className={styles.dialysis} >
                        <div>
                            <h1 className={styles.pregnant}>Dialysis as a component of UHC</h1>
                            <h3 className={styles.pred}>The five packages of Universal Health Coverage include dialysis as a component.</h3>
                        </div>
                        <div>
                            <h1 className={styles.pregnant}>Who benefits from It ?</h1>
                            <h3 className={styles.pred}>This is for any person suffering from kidney crisis. </h3>
                        </div>
                        <div className={styles.pred}>
                            <h1 className={styles.pregnant}>How to become a beneficiary</h1>
                            <h3>Go to the Bamenda reference Hospital. </h3>
                            <h3>Visit the haemodialysis center and get registered for FCFA 15000 frs. </h3>
                            <h3>Once registered you become a member and shall benefit for all your sessions for one year from date of registration.</h3>


                        </div>


                        <div>
                            <button className={styles.btn} type="button" onClick={(() => setText("Universal health coverage"))}>click to get the meaning of UHC</button>
                        </div>
                        <h1>{text}</h1>



                    </div>

                    <a className={styles.lad2} href="./contact">Get more information</a>
                </div>

                <div>
                    <div className={styles.card6}>
                        <div className={styles.public}>
                            <h1 className={styles.text}>05</h1>
                            <h1 className={styles.texts}>People undergoing dialysis shall henceforth pay only</h1>
                        </div>
                        <h2 className={styles.card}>FCFA 15,000 annual bundle</h2>
                        <h2 className={styles.card}>Instead Of FCFA 520,000</h2>
                        <h2 className={styles.card}>And benefit for all dialysis sessions  a  year.</h2>
                    </div>
                    <h3 className={styles.cards}><a className={styles.lad2} href="./contact">Get more information</a></h3>

                </div>



                <div>
                    {/* <h2 className={styles.text}>man</h2> */}
                </div>


                <div>
                    {/* <h2 className={styles.text}>man</h2> */}
                </div>








            </div >
        </div >
    );
}

export default Coverage
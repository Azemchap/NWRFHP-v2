import Image from "next/image";
import React from "react";
import styles from "./PostCard.module.css";
import Link from "next/link";

const PostCard = () => {
    return (
        <div>
            <div className={styles.container}>

                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/fondoh1.jpg"
                                alt="fondoh1"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}> DR. RICHARD MBARIKA FONDOH	</h1>

                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>ADMINISTRATOR </p>


                        <Link className={styles.link} href="./team/title1">
                            Read More
                        </Link>

                    </div>
                </div>




                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/maggi.jpg"
                                alt="maggi"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}> KINYUY MARGARET GHAM </h1>


                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>HEAD OF SECTION<br />ADMINISTRATION AND FINANCE.</p>


                        <Link className={styles.link} href="./team/sectionOne">
                            Read More
                        </Link>


                    </div>
                </div>

                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/ayaba.JPG"
                                alt="ayaba"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>UMEIKAI WYCLIFF AYABA	</h1>

                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>HEAD OF SECTION<br />HEALTH PROMOTION AND PARTNERSHIP SUPPORT</p>


                        <Link className={styles.link} href="./team/sectionTwo">
                            Read More
                        </Link>

                    </div>
                </div>



                

                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/ndum.JPG"
                                alt="ndum"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>NDUM SEPHERINE KENG	 </h1>

                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>HEAD OF UNIT<br />FINANCE AND ACCOUNTING</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>


                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/ndeh.jpg"
                                alt="ndeh"
                                fill
                                className={styles.alida}
                            />
                            <h1 className={styles.title}>NDEH DONATUS MOKOM	 </h1>

                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>HEAD OF UNIT<br />COMPUTERISED STOCK MANAGEMENT</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>




                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/yembe.JPG"
                                alt="yembe"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>YEMBE NLINWE OLIVER 	 </h1>

                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>HEAD OF UNIT<br />HEALTH INSURANCE DEVELOPMENT</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>


                


                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/kuh.JPG"
                                alt="kuh"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>KUH FOINMBAM JOSEPH	  </h1>
                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>HEAD OF UNIT<br />DISTRIBUTION & SUPERVISION</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>

                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/ndzi.JPG"
                                alt="ndzi"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>NDZI LAWRENCE NGAFFI	</h1>
                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>HEAD OF UNIT<br />LABORATORY<br />Phone Number:<b />111111111<br />Email Address:<br />ndzilu@gmail.com</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>


                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/tome.JPG"
                                alt="tome"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>TUME AMOS NSAWIR	 </h1>
                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>HEAD OF UNIT<br />HUMAN RESOURCES & LOGISTICS<br />Phone Number:<br />1253456789<br />Email Address:<br />123456789</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>



                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/anembum.JPG"
                                alt="anembum"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>ASAFOR ATUNGOMBI ANIMBOM	 </h1>
                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>ADMINISTRATIVE ASSISTANT</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>


                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/fon3.jpg"
                                alt="fon3"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>FON EVELINE MUNDI	 </h1>
                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>STOREKEEPER</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>

                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/sam.JPG"
                                alt="sam"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>FON SAMUEL CHO	 </h1>

                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>JANITOR</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>

                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/musa.JPG"
                                alt="musa"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>SANGU MUSA SHINTOUO	 </h1>
                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>CHIEF DRIVER</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>


                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/ndong.JPG"
                                alt="ndong"
                                fill
                                className={styles.alida}
                            />
                            <h1 className={styles.title}>NDONG SAMUEL	ASSISTANT  </h1>
                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>HEAD OF UNIT<br />REGIONAL MEDICAL STORE<br />	ON SECONDMENT</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>


                


                


                

                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/alida.jpg"
                                alt="alida"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>FOPA TEMBONG ALIDA	 </h1>
                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>STOREKEEPER - LAB</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>


                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/ambe.JPG"
                                alt="ambe"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>TAMAJONG DIVINE AMBE	 </h1>
                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>STOREKEEPER</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>



                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/apo.JPG"
                                alt="apo"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>APO JONAS AMANDONG	 </h1>
                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>STOREKEEPER</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>


                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/brenda.jpg"
                                alt="brenda"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>KWANYUY RELINDIS	 </h1>
                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>STOREKEEPER <br /> KUMBO SUB-STORE</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>

                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/comet.JPG"
                                alt="comet"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>COMET MBIANDA	 </h1>
                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>DRIVER</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>



                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/denis.JPG"
                                alt="denis"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>ABAHMUM DENISE	</h1>
                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>JANITOR</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>



                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/eleen.jpg"
                                alt="eleen"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>AYENI ELEEN	 </h1>
                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>LABORATORY SCIENTIST<br />UHC</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>




                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/lukong.JPG"
                                alt="lukong"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>LUKONG JULIUS	 </h1>
                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>STOREKEEPER-OKP</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>




                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/mbah.JPG"
                                alt="mbah"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>MBAH JONATHAN	</h1>
                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>DRIVER</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>




                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/zuh.JPG"
                                alt="zuh"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>ZOW SHEILA CHE	</h1>
                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>SECRETARY/JANITOR <br /> UHC</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>



                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/matha2.jpg"
                                alt="matha2"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>SHAIKA MARTHA	</h1>
                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>STOREKEEPER </p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>

                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/ibrahim.jpg"
                                alt="ibrahim"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>IBRAHIM ADAMU	 </h1>
                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>STOREKEEPER</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>

                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/renita.jpg"
                                alt="renita"
                                fill
                                className={styles.alida}
                            />


                            <h1 className={styles.title}>FOSEH RENITA NCHUYEKE	 </h1>
                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>STOREKEEPER</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>



                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/njaibo.jpg"
                                alt="njaibo"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>NJAIBO JARADINE CHEPNGUM	 </h1>
                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>INTERNAL AUDITOR</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>



                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/pascaline.png"
                                alt="pascaline"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>MUMA NGUM PASCALINE	 </h1>
                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>CASHIER</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>



                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/.JPG"
                                alt="nfor"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>NFOR BLAISE	</h1>/
                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>PHARMACY TECHNICIAN <br /> NKAMBE SUBSTORE</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>


                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/dan.jpg"
                                alt="dan"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>ZOH DANIEL </h1>
                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>STOREKEEPER/DRIVER</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>



                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/promise.jpg"
                                alt="promise"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>KOMETA PROMISE MBOHLE	 </h1>
                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>HEAD OF UNIT<br />REGIONAL MEDICAL STORE</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>


                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/nwa.jpg"
                                alt="nwa"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>NWA EBUI MARILYNE 	 </h1>
                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>STOREKEEPER</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>


                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/nkambi.JPG"
                                alt="nkambi"
                                fill
                                className={styles.alida}
                            />

                            <h1 className={styles.title}>NKAIMBI COMFORT	 </h1>
                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>STOREKEEPER<br /> PUBLIC HEALTH PROGRAM <br />	ON SECONDMENT</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>



                <div className={styles.post}>

                    <div className={styles.top}>
                        <div className={styles.alidaContainer}>
                            <Image
                                src="/images/ibrahim.jpg"
                                alt="ibrahim"
                                fill
                                className={styles.alida}
                            />

                            {/* <h1 className={styles.title}>Lorem ipsum dolor, sit </h1> */}
                        </div>

                        <span className={styles.date}>30/12/2024</span>
                    </div>

                    <div className={styles.bottom}>

                        <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias veritatis eum vel cupiditate deleniti suscipit, repellat consectetur sed dolore sit.</p>
                        <Link className={styles.link} href="./Team/post">
                            Read More
                        </Link>
                    </div>
                </div>
















            </div>

        </div>

    );
};

export default PostCard;



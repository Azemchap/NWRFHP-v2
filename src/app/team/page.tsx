import React from "react";
import styles from "./Team.module.css";
import PostCard from "../../components/postCard/PostCard";


const TeamPage = () => {
    return (

        <div
            className="container-fluid container mx-auto pt-16 "
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className=" container mx-auto p-4" >
                <div>
                    <h1 className={styles.headContainer}>Staff Of The Fund</h1>
                    <div className={styles.container}>

                        <div className={styles.post}>
                            <PostCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamPage;

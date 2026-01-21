import Image from "next/image";
import React from "react";
import styles from "./PostCard.module.css";
import Link from "next/link";
import teamData from "@/data/team.json";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  date: string;
  slug: string;
}

const PostCard: React.FC = () => {
  return (
    <div>
      <div className={styles.container}>
        {teamData.map((member: TeamMember) => (
          <div key={member.id} className={styles.post}>
            <div className={styles.top}>
              <div className={styles.alidaContainer}>
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  className={styles.alida}
                />
                <h1 className={styles.title}>{member.name}</h1>
              </div>
              <span className={styles.date}>{member.date}</span>
            </div>

            <div className={styles.bottom}>
              <p className={styles.desc}>{member.role}</p>
              <Link className={styles.link} href={`/team/${member.slug}`}>
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostCard;

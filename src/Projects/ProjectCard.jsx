import { useRef, useEffect, useState } from 'react';
import styles from '../styles/ProjectCard.module.css';

function ProjectCard({ image, title, description, link }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

useEffect(() => {
  const observer = new window.IntersectionObserver(
    ([entry]) => {
      setVisible(entry.isIntersecting);
    },
    { threshold: 0.2 }
  );
  if (cardRef.current) observer.observe(cardRef.current);
  return () => observer.disconnect();
}, []);

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${visible ? styles.visible : ''}`}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className={styles.image} />
      </a>
      <div className={styles.details}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;

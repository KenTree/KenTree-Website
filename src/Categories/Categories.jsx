import styles from '../styles/Categories.module.css'

function Categories() {
  return (
    <div className={styles.Categories}>
      <div><a href="#home">Home</a></div>
      <div><a href="#about">About</a></div>
      <div><a href="#projects">Projects</a></div>
      <div>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default Categories

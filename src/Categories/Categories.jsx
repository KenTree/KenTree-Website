import styles from './Categories.module.css'

function Categories()
{
    return (
    <div className={styles.Categories}>
        <div>Home</div>
        <div>About</div>
        <div>Projects</div>
        <div>Contact</div>
    </div>
    );
}

export default Categories
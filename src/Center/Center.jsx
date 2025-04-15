import styles from './Center.module.css'
import Introduction from './Card';

function Center(){
    return(
        <div className={styles.wrapper}>
        <Introduction/>
        <h1 className={styles.welcomeText}>kentree.dev</h1>
        </div>
    );
}

export default Center
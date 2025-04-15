import profilePic from '../assets/me.jpg'
import styles from './Center.module.css'

function Introduction()
{
    return (
        <div className={styles.profileWrapper}>
            <img className={styles.profileImage} src={profilePic} alt="profile picture"></img>
        </div>
    );
}

export default Introduction
'use client'
import styles from "./navbar.module.css";

export default function NavBar() {
    return (
        <nav className={styles.navBar}>
            <ul className={styles.navList}>
                <li className={styles.listItem}><a href='..' className={styles.navLink}>Main</a></li>
                <li className={styles.listItem}><a href='/about' className={styles.navLink}>About</a></li>
                <li className={styles.listItem}><a href='/promodoro' className={styles.navLink}>Promodoro</a></li>
                <li className={styles.listItem}><a href='/interleaving' className={styles.navLink}>Interleaving</a></li>
                <li className={styles.listItem}><a href='/elaborate_interrogation' className={styles.navLink}>Elaborate Interrogation</a></li>
                <li className={styles.listItem}><a href='/mind_mapping' className={styles.navLink}>Mind Mapping</a></li>
                <li className={styles.listItem}><a href='/practice_testing' className={styles.navLink}>Practice Testing</a></li>
                <li className={styles.listItem}><a href='/review_revise' className={styles.navLink}>Review & Revise</a></li>
            </ul>
        </nav>
    );
}

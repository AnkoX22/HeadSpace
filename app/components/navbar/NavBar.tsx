import Link from 'next/link'
import styles from './navbar.module.css'

export default function NavBar() {
    return (
        <>
            <ul className={styles.navBar}>
                <li className={styles.listItem}><Link href={'..'}>Main</Link></li>
                <li className={styles.listItem}><Link href={'/about'}>About</Link></li>
                <li className={styles.listItem}><Link href={'/promodoro'}>Promodoro</Link></li>
                <li className={styles.listItem}><Link href={'/interleaving'}>Interleaving</Link></li>
                <li className={styles.listItem}><Link href={'/elaborate_interrogation'}>Elaborate Interrogation</Link></li>
                <li className={styles.listItem}><Link href={'/mind_mapping'}>Mind Mapping</Link></li>
                <li className={styles.listItem}><Link href={'/practice_testing'}>Practice Testing</Link></li>
                <li className={styles.listItem}><Link href={'/review_revise'}>Review & Revise</Link></li>
            </ul>
        </>
    );
}
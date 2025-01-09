'use client'

import Link from 'next/link';
import styles  from "./navbar.module.css"
// import {useEffect} from "react";
// import {useEffect, useState} from "react";



/* useEffect ( () => {
        const el = document.querySelector('.click');
        const menu = document.querySelector('.secondNav');

        el?.addEventListener('click', (event) => {
            event.stopPropagation();
            menu?.classList.toggle("showmenu");
        });

        window.addEventListener('click', (event) => {
            if (!menu?.contains(event.target as Node) && !el?.contains(event.target as Node)) {
                menu?.classList.remove("showmenu");
            }
        });
    }
)
 */


export default function NavBar() {

    return (
        <>
            <ul className={styles.navBar}>
                <div className={styles.listItem}>
                    <button className={styles.menu}><i className={"fa-solid fa-bars"}></i></button>
                </div>
                <div className={styles.secondNav}>
                    <ul className={styles.navBar}>
                        <li className={styles.listItem}><Link href={'..'}>Main</Link></li>
                        <li className={styles.listItem}><Link href={'/about'}>About</Link></li>
                        <li className={styles.listItem}><Link href={'/promodoro'}>Promodoro</Link></li>
                        <li className={styles.listItem}><Link href={'/interleaving'}>Interleaving</Link></li>
                        <li className={styles.listItem}><Link href={'/elaborate_interrogation'}>Elaborate
                            Interrogation</Link></li>
                        <li className={styles.listItem}><Link href={'/mind_mapping'}>Mind Mapping</Link></li>
                        <li className={styles.listItem}><Link href={'/practice_testing'}>Practice Testing</Link></li>
                        <li className={styles.listItem}><Link href={'/review_revise'}>Review & Revise</Link></li>
                    </ul>
                </div>
                <div className={styles.components}>
                    <li className={styles.listItem}><i className={"fa-solid fa-gear"}></i></li>
                    <li className={styles.listItem}><i className={"fa-regular fa-user"}></i></li>
                </div>
            </ul>
        </>
    );
}
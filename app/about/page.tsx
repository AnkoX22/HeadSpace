import styles from './styles.module.css'
import Link from "next/link";

export default function About() {
    return (
        <>
            <h1 className={styles.contentTitle}>Method Details</h1>
            <div className={styles.divClass}>
                <br/>
                <h2 className={styles.methodTitle}>The Promodoro Method</h2>
                <br/>
                <Link href={"../promodoro"}>
                    <p className={styles.methodDetails}>The Pomodoro Technique is a time management method developed by
                        Francesco Cirillo in the late
                        1980s.It uses a kitchen timer to break work into intervals, typically 25 minutes in length,
                        separated by short breaks. Each interval is known as a pomodoro, from the Italian word for
                        tomato,
                        after the tomato-shaped kitchen timer Cirillo used as a university student.</p>
                </Link>
                <br/>
            </div>
            <div className={styles.divClass}>
                <br/>
                <h2 className={styles.methodTitle}>
                    The Elaborate Interrogation Method
                </h2>
                <br/>
                <Link href={"../elaborate_interrogation"}>
                    <p className={styles.methodDetails}>Elaborative Interrogation is a cognitive learning strategy that
                        enhances comprehension and retention by prompting learners to generate explanations for why
                        certain facts or concepts are true. This method encourages deeper processing of information by
                        connecting new material to existing knowledge, thus creating a more integrated
                        understanding. </p>
                </Link>

                <br/>
            </div>
            <div className={styles.divClass}>
                <br/>
                <h2 className={styles.methodTitle}>
                    The Interleaving Method
                </h2>
                <br/>
                <Link href={"../interleaving"}>
                    <p className={styles.methodDetails}> Interleaving is a process where students mix, or interleave,
                        multiple subjects or topics while they study in order to improve their learning</p>
                </Link>
                <br/>
            </div>
            <div className={styles.divClass}>
                <br/>
                <h2 className={styles.methodTitle}>
                    The Mind Mapping Method
                </h2>
                <br/>
                <Link href={"../mind_mapping"}>
                    <p className={styles.methodDetails}>A mind map is a diagram used to visually organize information
                        into a hierarchy, showing relationships among pieces of the whole.It is often based on a single
                        concept, drawn as an image in the center of a blank page, to which associated representations of
                        ideas such as images, words and parts of words are added. Major ideas are connected directly to
                        the central concept, and other ideas branch out from those major ideas. </p>
                </Link>
                <br/>
            </div>
            <div className={styles.divClass}>
                <br/>
                <h2 className={styles.methodTitle}>
                    The Practice Testing Method
                </h2>
                <br/>
                <Link href={"../practice_testing"}>
                    <p className={styles.methodDetails}>Practice testing, also known as retrieval practice, involves
                        studying a topic and then trying to recall the newly studied material. For example, students
                        read a passage or watch a lecture and then try to recall as much as they can. Or, students read
                        an article followed by a practice quiz.</p>
                </Link>
                <br/>
            </div>
            <div className={styles.divClass}>
                <br/>
                <h2 className={styles.methodTitle}>
                    The Review / Revise Method
                </h2>
                <br/>
                <Link href={"../review_revise"}>
                    <p className={styles.methodDetails}>The Recall and Revise study method is a highly effective
                        learning strategy that emphasizes active engagement with material and periodic review to
                        reinforce memory. It is rooted in the principles of active recall and spaced repetition, which
                        are backed by cognitive science as being essential for deep learning and long-term
                        retention.</p>
                </Link>
                <br/>
            </div>
            <div className={styles.divClass}>
                <br/>
                <h2 className={styles.contentTitle}>
                    About this website
                </h2>
                <br/>
                <p className={styles.methodDetails}>
                    The main goal of HeadSpace is to create a space where the most famous and most well
                    working study methods / techniques can coexist. The methods can be tried and implemented
                    on their one or in combination with each other to produce the desired results.
                    <br/>
                    <br/>
                    This website is created as a project to an introductionary course in Web Development, so
                    note that mistakes may  insure and the support may not be satisfactory.
                </p>
                <br/>
            </div>
        </>
    );
}
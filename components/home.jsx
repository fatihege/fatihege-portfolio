import {useEffect, useState} from 'react'
import styles from '../styles/Index.module.sass'

export default () => {
    const [canAnimate, setCanAnimate] = useState(false)
    const [canAnimateLastName, setCanAnimateLastName] = useState(false)
    const [canAnimateJob, setCanAnimateJob] = useState(false)

    useEffect(() => {
        setCanAnimate(true)
        setTimeout(() => setCanAnimateLastName(true), 150)
        setTimeout(() => setCanAnimateJob(true), 250)
    }, [])

    return (
        <div className={`${styles.section} ${styles.home_section}`} id="home">
            <div className={styles.section_wrapper}>
                <h1 className={styles.name}>
                    <span className={`${styles.first_name} ${canAnimate ? styles.animate : ''}`}>fatih</span><br/>
                    <span className={`${styles.last_name} ${canAnimateLastName ? styles.animate : ''}`}>ege</span>
                </h1>
                <h2 className={`${styles.job} ${canAnimateJob ? styles.animate : ''}`}>developer / designer since 2019</h2>
                <img src="/me.png" alt="Fatih EGE" className={`${styles.picture} ${canAnimate ? styles.animate : ''}`}/>
            </div>
        </div>
    )
}
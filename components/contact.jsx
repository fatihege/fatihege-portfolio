import {useEffect, useRef, useState} from 'react'
import styles from '../styles/Index.module.sass'

export default () => {
    const section = useRef()
    const [canAnimate, setCanAnimate] = useState(false)
    const [canAnimateGitHub, setCanAnimateGitHub] = useState(false)
    const [canAnimateDiscord, setCanAnimateDiscord] = useState(false)
    const [canAnimateLinkedIn, setCanAnimateLinkedIn] = useState(false)
    const [canAnimateInstagram, setCanAnimateInstagram] = useState(false)
    const [canAnimateEmail, setCanAnimateEmail] = useState(false)

    const onScroll = () => {
        const offset = 200
        const sectionY = section.current.getBoundingClientRect().top

        const customTimeout = (callback, timeout) => {
            setTimeout(() => {
                if (sectionY < window.innerHeight - offset) callback()
            }, timeout)
        }

        if (sectionY < window.innerHeight - offset) {
            setCanAnimate(true)
            customTimeout(() => setCanAnimateGitHub(true), 150)
            customTimeout(() => setCanAnimateDiscord(true), 250)
            customTimeout(() => setCanAnimateLinkedIn(true), 350)
            customTimeout(() => setCanAnimateInstagram(true), 450)
            customTimeout(() => setCanAnimateEmail(true), 550)
        }
    }

    useEffect(() => {
        onScroll()
        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (
        <div className={`${styles.section} ${styles.contact_section}`} id="contact">
            <div className={styles.section_wrapper}>
                <h2 className={`${styles.section_title} ${canAnimate ? styles.animate : ''}`} ref={section}>
                    contact <span className={styles.stroke_title}>me</span>
                </h2>
                <div className={styles.contacts_grid}>
                    <div className={`${styles.contact} ${canAnimateGitHub ? styles.animate : ''}`}>
                        <h4>GitHub</h4>
                        <a href="https://github.com/fatihege" target="_blank">@fatihege</a>
                    </div>
                    <div className={`${styles.contact} ${canAnimateDiscord ? styles.animate : ''}`}>
                        <h4>Discord</h4>
                        <a href="https://discordapp.com/users/799520588485361675" target="_blank">fatxh#0001</a>
                    </div>
                    <div className={`${styles.contact} ${canAnimateLinkedIn ? styles.animate : ''}`}>
                        <h4>LinkedIn</h4>
                        <a href="https://www.linkedin.com/in/fatihege" target="_blank">/in/fatihege</a>
                    </div>
                    <div className={`${styles.contact} ${canAnimateInstagram ? styles.animate : ''}`}>
                        <h4>Instagram</h4>
                        <a href="https://www.instagram.com/ifatxh" target="_blank">@ifatxh</a>
                    </div>
                    <div className={`${styles.contact} ${canAnimateEmail ? styles.animate : ''}`}>
                        <h4>Email</h4>
                        <a href="mailto:ifatxh@gmail.com" target="_blank">ifatxh@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
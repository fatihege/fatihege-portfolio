import {useEffect, useRef, useState} from 'react'
import styles from '../styles/Index.module.sass'

export default () => {
    const section = useRef()
    const [canAnimate, setCanAnimate] = useState(false)
    const [canAnimateParagraph, setCanAnimateParagraph] = useState(false)

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
            customTimeout(() => setCanAnimateParagraph(true), 150)
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
        <div className={`${styles.section} ${styles.about_section}`} id="about">
            <div className={styles.section_wrapper}>
                <h2 className={`${styles.section_title} ${canAnimate ? styles.animate : ''}`} ref={section}>
                    <span className={styles.stroke_title}>about</span> me
                </h2>
                <p className={canAnimateParagraph ? styles.animate : ''}>
                    My name is Fatih EGE, I was born in 2006. I have been developing myself in the software
                    development branch since I was 13 (2019). On the way I started with web design, I am now a
                    professional web developer. I've been working with HTML, CSS, JavaScript (Node.js, React, Next.js
                    etc.) for a long time. Apart from these, I know beginner-intermediate level TypeScript, PHP and C++
                    languages. In addition, I am working to improve myself in the branch of artificial intelligence.
                </p>
            </div>
        </div>
    )
}

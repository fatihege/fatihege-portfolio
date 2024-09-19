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
                    My name is Fatih EGE and I was born in November 2006. I am developing myself in the software
                    development field since I was 13 (2019). On the way I started with web design, now I am a
                    professional web developer. I have worked with HTML, CSS, JavaScript (Node.js, React, Next.js
                    etc.) for 4 years. Nowadays, I am switching to AI and Game Development fields and currently
                    learning UE5, C++, and 3D modeling.
                </p>
            </div>
        </div>
    )
}

import {useEffect, useRef, useState} from 'react'
import styles from '../styles/Index.module.sass'

export default () => {
    const section = useRef()
    const [canAnimate, setCanAnimate] = useState(false)
    const [canAnimateGrid, setCanAnimateGrid] = useState(false)

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
            customTimeout(() => setCanAnimateGrid(true), 150)
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
        <div className={`${styles.section} ${styles.skills_section}`} id="skills">
            <div className={styles.section_wrapper}>
                <h2 className={`${styles.section_title} ${canAnimate ? styles.animate : ''}`} ref={section}>
                    <span className={styles.stroke_title}>my</span> skills
                </h2>
                <div className={`${styles.skills_grid} ${canAnimateGrid ? styles.animate : ''}`}>
                    <div className={styles.skill}>
                        <img className={styles.skill_icon} src="/html5.svg" alt="HTML5"/>
                        <span className={styles.skill_title}>HTML5</span>
                    </div>
                    <div className={styles.skill}>
                        <img className={styles.skill_icon} src="/css3.svg" alt="CSS3"/>
                        <span className={styles.skill_title}>CSS3</span>
                    </div>
                    <div className={styles.skill}>
                        <img className={styles.skill_icon} src="/javascript.svg" alt="JavaScript"/>
                        <span className={styles.skill_title}>JavaScript</span>
                    </div>
                    <div className={styles.skill}>
                        <img className={styles.skill_icon} src="/nodejs.svg" alt="Node.js"/>
                        <span className={styles.skill_title}>Node.js</span>
                    </div>
                    <div className={styles.skill}>
                        <img className={styles.skill_icon} src="/react.svg" alt="React"/>
                        <span className={styles.skill_title}>React</span>
                    </div>
                    <div className={styles.skill}>
                        <img className={styles.skill_icon} src="/nextjs.svg" alt="Next.js"/>
                        <span className={styles.skill_title}>Next.js</span>
                    </div>
                    <div className={styles.skill}>
                        <img className={styles.skill_icon} src="/figma.svg" alt="Figma"/>
                        <span className={styles.skill_title}>Figma</span>
                    </div>
                    <div className={styles.skill}>
                        <img className={styles.skill_icon} src="/git.svg" alt="Git"/>
                        <span className={styles.skill_title}>Git</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
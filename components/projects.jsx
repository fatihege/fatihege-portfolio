import {useEffect, useRef, useState} from 'react'
import styles from '../styles/Index.module.sass'

export default () => {
    const section = useRef()
    const [canAnimate, setCanAnimate] = useState(false)
    const [canAnimateLink, setCanAnimateLink] = useState(false)
    const [canAnimateList, setCanAnimateList] = useState(false)
    const projects = [
        {
            url: 'https://github.com/fatihege/next-todo',
            title: 'Next.js Todo App',
            description: 'I developed a Todo List application using the MERN stack.',
        },
        {
            url: 'https://github.com/fatihege/sabanci-evehicle-ui',
            title: 'Electricle Vehicle Interface Software',
            description: 'In 2022, I made interface software for the electric vehicle that my school wants to participate in Teknofest Technology Festival.',
        },
        {
            url: 'https://www.dönüşüm.com/',
            title: 'Dönüşüm.com Website',
            description: 'I developed a 100% mobile compatible, management panel and a good SEO optimization website for AEB Transformation-IT, which was established in 2022 under the name of Dönüşüm.com Electronic Recycling.',
        },
        {
            url: 'https://fatihege.github.io/cps-test',
            title: 'CPS Test',
            description: 'I developed a small-scale CPS test application that measures how many clicks per second you make.',
        },
        {
            url: 'https://github.com/fatihege/weboost-kodluyoruz',
            title: 'Kodluyoruz.org Clone for WE\'Boost Hackathon',
            description: 'In the web design competition called WE\'Boost Hackathon, which I participated in 2022, I made a clone of the website Kodluyoruz.org, which was requested from us.',
        },
        {
            url: 'https://asena.xyz',
            title: 'Asena Discord Bot Website',
            description: 'In 2021, I developed a multi-language website for the Discord giveaway and survey bot named Asena.',
        },
    ]

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
            customTimeout(() => setCanAnimateLink(true), 150)
            customTimeout(() => setCanAnimateList(true), 250)
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
        <div className={`${styles.section} ${styles.projects_section}`} id="projects">
            <div className={styles.section_wrapper}>
                <h2 className={`${styles.section_title} ${canAnimate ? styles.animate : ''}`} ref={section}>
                    projects
                </h2>
                <p className={`${styles.other_projects} ${canAnimateLink ? styles.animate : ''}`}>
                    You can find my other projects on my <a href="https://github.com/fatihege" target="_blank">GitHub account</a>.
                </p>
                <div className={`${styles.projects} ${canAnimateList ? styles.animate : ''}`}>
                    {projects.map(p => (
                        <a href={p.url} target="_blank" className={styles.project}>
                            <h3 className={styles.project_title}>{p.title}</h3>
                            <p className={styles.project_description}>{p.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
import Head from 'next/head'
import {useEffect, useState} from 'react'
import Header from '../components/header'
import styles from '../styles/Index.module.sass'
import Home from '../components/home'
import About from '../components/about'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Copyright from '../components/copyright'

export default () => {
    const [pageLoaded, setPageLoaded] = useState(false)

    useEffect(() => {
        const pageLoad = () => setPageLoaded(true)

        if (document.readyState === 'complete') pageLoad()
        else {
            window.addEventListener('load', pageLoad)
            return () => window.removeEventListener('load', pageLoad)
        }
    }, [])

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true}/>
                <link rel="shortcut icon" href="/favicon.ico"/>
                <title>Fatih EGE</title>
            </Head>
            <div className={styles.container}>
                <Header pageLoaded={pageLoaded}/>
                <Home/>
                <About/>
                <Skills/>
                <Projects/>
                <Contact/>
                <Copyright/>
            </div>
        </>
    )
}

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
import SidePanel from "../components/side-panel";

export default () => {
    const [pageLoaded, setPageLoaded] = useState(false)
    const [showSidePanel, setShowSidePanel] = useState(false)

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
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="title" content="Fatih EGE" />
                <meta name="description" content="Fatih EGE's portfolio." />
                <meta name="keywords" content="fatih ege, web development, web dev, development, design, portfolio, software, ui, ux" />
                <meta name="author" content="Fatih EGE" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="revisit-after" content="30 days" />
                <meta name="theme-color" content="#090909" />
                <meta httpEquiv="content-language" content="en" />
                <meta property="og:title" content="Fatih EGE" />
                <meta property="og:description" content="Fatih EGE's portfolio." />
                <meta property="og:image" content="/banner.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:description" content="Fatih EGE's portfolio." />
                <meta property="twitter:image" content="/banner.png" />
                <meta property="twitter:image:alt" content="Fatih EGE's portfolio banner." />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link rel="shortcut icon" href="/favicon.ico"/>
                <title>Fatih EGE</title>
            </Head>
            <div className={styles.container}>
                <Header pageLoaded={pageLoaded} sidePanel={setShowSidePanel}/>
                <SidePanel show={showSidePanel} sidePanel={setShowSidePanel}/>
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

import styles from '../styles/Index.module.sass'

export default ({pageLoaded}) => {
    return (
        <div className={styles.header}>
            <div className={`${styles.header_wrapper} ${!pageLoaded ? styles.hidden : ''}`}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}
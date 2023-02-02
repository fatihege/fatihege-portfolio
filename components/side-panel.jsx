import styles from '../styles/Index.module.sass'

export default ({show, sidePanel}) => {
    return (
        <div className={`${styles.side_panel} ${show ? styles.active : ''}`}>
            <ul>
                <li onClick={() => sidePanel(false)}><a href="#home">Home</a></li>
                <li onClick={() => sidePanel(false)}><a href="#about">About</a></li>
                <li onClick={() => sidePanel(false)}><a href="#skills">Skills</a></li>
                <li onClick={() => sidePanel(false)}><a href="#projects">Projects</a></li>
                <li onClick={() => sidePanel(false)}><a href="#contact">Contact</a></li>
                <li className={styles.return} onClick={() => sidePanel(false)}>
                    <img src="/return.svg" alt="Return"/>
                </li>
            </ul>
        </div>
    )
}
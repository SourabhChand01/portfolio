import styles from "./header.module.css"
const Header=()=>{
    return(
        <>
        <div className={`${styles["navbar"]}`}>
            <div className={`${styles["left"]}`}>Sourabh's</div>
            <div className={`${styles["right"]}`}><span><a href="#home">Home</a></span>
            <span><a href="#aboutme">About me</a></span>
            <span><a href="#contact">contact</a></span>
            </div>
        </div>
        </>
    )
}
export default Header;
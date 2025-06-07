import styles from "./hero.module.css"
import logo2 from "../store/linkedin.svg";
import logo1 from "../store/github.svg";
const Hero=()=>{
return(
    <>
    <div className={`${styles["herosec"]}`} id="home">
        <div className={`${styles["left"]}`}>
            <div className={`${styles["intro"]}`}>
            <h4>Hello,I'm</h4>
            <p className={`${styles["h2"]}`}>SOURABH CHAND</p>
            <h3>PASSIONATE FRONTEND WEB DEVELOPER </h3>
            </div>
            <div className={`${styles["socialicons"]}`}>
                <div className={`${styles["logos"]}`}><a href="https://github.com/SourabhChand01" target="blank"><img src={logo1} alt="github" /></a>
                </div>
                <div className={`${styles["logos"]}`}><img src={logo2} alt="LinkedIn" /></div>
            </div>
        </div>
        <div className={`${styles["right"]}`}></div>
    </div>
    
    </>
)
}
export default Hero;
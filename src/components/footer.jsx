import styles from "./footer.module.css"
import logo2 from "../store/linkedin.svg";
import logo1 from "../store/github.svg";
const Footer = () => {
  return (
    <>
    <div className={`${styles["footersec"]}`}>
        <div className={`${styles["leftfooter"]}`}>
            <p>Sourabh</p>
        </div>
        <div className={`${styles["midfooter"]}`}>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#aboutme">About me</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        <div className={`${styles["rightfooter"]}`}>
            <div className={`${styles["logos"]}`}>
                <img src={logo1} alt="github" />
                <img src={logo2} alt="linkedin" />
            </div>
        </div>
    </div>
    </>
  );
};
export default Footer;

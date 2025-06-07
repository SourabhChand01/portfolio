import frontend from '../store/programming.svg'
import js from '../store/js.svg'
import creativity from '../store/bulb.svg'
import style from "./section1.module.css"
import Form from "./form"
const Section1=()=>{
    return(
        <>
        <div className={`${style["subsection1"]}`}>
            <h1 className={`${style["ilike"]}`}>Things I like</h1>
            <div className={`${style["likebox"]}`}>
                <div className={`${style["hobbies"]}`} id='firsthobbie'>
                    <div className={`${style["image"]}`}><img src={frontend} alt="" />
                    </div>
                    <h2>FrontEnd</h2>
                    <p>I'm front-end focused and love crafting seamless, engaging experiences with React.js, as well as clean, structured designs using pure HTML and CSS.</p>
                </div>
                
                <div className={`${style["hobbies"]}`}>
                    <div className={`${style["image"]}`}><img src={js} alt="" />
                    </div>
                    <h2>JS</h2>
                    <p>I like JavaScript because its flexibility lets me create dynamic, interactive experiences, making coding both powerful and fun.</p>
                </div>

                <div className={`${style["hobbies"]}`} id='aboutme'>
                    <div className={`${style["image"]}`}><img src={creativity} alt="" />
                    </div>
                    <h2>Creativity</h2>
                    <p>I believe that working on front-end challenges pushes my creativity further than I ever imagined—turning ideas into engaging, interactive experiences.</p>
                </div>
            </div>
            <div className={`${style["aboutdiv"]}`}>
            <div className={`${style["Aboutme"]}`}>
                <h1>About me</h1>
                <p>
                    Hi, I'm Sourabh, a front-end developer and student passionate about crafting seamless, interactive experiences. I specialize in React.js, HTML, and CSS, blending creativity with functionality to bring designs to life. I enjoy working on dynamic user interfaces, solving complex problems, and continuously learning new technologies to enhance user interactions. From structured layouts to engaging animations, I strive to create front-end experiences that are both visually stunning and technically sound. My goal is to gain hands-on experience through an internship, refining my skills and contributing to meaningful projects that push the boundaries of web development.
                </p>
            </div>
            </div>
        </div>
        <div className={`${style["subsection2"]}`}>
            <h1>...</h1>
            <Form></Form>
        </div>
        </>
    )
    
}
export default Section1;
import style from "./form.module.css";

const Form = () => {
    return (
        <div className={style.container} id="contact">
            <h2>Contact Us</h2>
            <form method="POST">
                <div>
                    <label htmlFor="name1">Enter Name:</label>
                    <input type="text" name="username" id="name1" required />
                </div>

                <div>
                    <label htmlFor="email1">Email Address:</label>
                    <input type="email" name="email" id="email1" required />
                </div>

                <div>
                    <label htmlFor="message1">Message:</label>
                    <textarea name="message" id="message1" rows={6} required></textarea>
                </div>

                <div>
                    <button type="submit" className={style.submitButton}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;

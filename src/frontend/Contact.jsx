import { MdOutlineEmail } from "react-icons/md"
import "../assets/scss/contact.scss"
import { FaLinkedinIn, FaLocationArrow } from "react-icons/fa"
import { IoLogoGithub } from "react-icons/io"
import emailjs from '@emailjs/browser';
import { useState } from "react";

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    function sendEmail(e) {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_USER_ID
        )
            .then((result) => {
                console.log(result.text);
                setSuccess(true);
                setName('');
                setEmail('');
                setMessage('');
                setLoading(false);
            })
            .catch((error) => {
                console.error(error.text);
                setError(true);
                setLoading(false);
            });
    }



    return (
        <div className="row justify-content-center">
            <div className="col-lg-11">
                <div className="contact_container">
                    <h2 className="text-center page-title">Contact</h2>
                    <p className="text-center page-sub-title">Feel free to reach out to me.</p>


                    <div className="row mt-5 align-items-start row-gap-24">
                        <div className="col-lg-6">
                            <div className="contact_info_container">
                                <p className="contact_text text-center">If you have any project or idea you&#39;d like to discuss, or just want to say hi, please don&#39;t hesitate to send me a message. I&#39;ll get back to you as soon as possible.</p>

                                <ul className="contact_info">
                                    <li className="d-flex gap-3 align-items-center flex-wrap">
                                        <div className="icon">
                                            <FaLocationArrow />
                                        </div>
                                        <div className="info">
                                            <p>Location</p>
                                            <p>Dhake, Bangladesh</p>
                                        </div>
                                    </li>

                                    <li className="d-flex gap-3 align-items-center flex-wrap">
                                        <div className="icon">
                                            <MdOutlineEmail />
                                        </div>
                                        <div className="info">
                                            <p>Email</p>
                                            <p>ashfatul.islam@gmail.com</p>
                                        </div>
                                    </li>

                                    <li className="d-flex gap-3 align-items-center flex-wrap">
                                        <div className="icon">
                                            <IoLogoGithub />
                                        </div>
                                        <div className="info">
                                            <p>GitHub</p>
                                            <p>@ashfatul</p>
                                        </div>
                                    </li>

                                    <li className="d-flex gap-3 align-items-center flex-wrap">
                                        <div className="icon">
                                            <FaLinkedinIn />
                                        </div>
                                        <div className="info">
                                            <p>Linkedin</p>
                                            <p>@ashfatul</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <form onSubmit={sendEmail} className="contact_form">
                                <h2 className="text-center">Get in touch</h2>
                                <label htmlFor="contact_name">Your Name</label>
                                <input type="text" required name="name" id="contact_name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jhon Doe"/>

                                <label htmlFor="contact_email">Your Email</label>
                                <input type="email" required name="email" id="contact_email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" />

                                <label htmlFor="contact_message">Your Message</label>
                                <textarea name="message" required id="contact_message" cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write your message here..."></textarea>

                                <button type="submit">{loading ? 'Sending...' : 'Send Message'}</button>
                                {success && <p className="text-center text-success">Message sent successfully!</p>}
                                {error && <p className="text-center text-danger">Error sending message!</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact



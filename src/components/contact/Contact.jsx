import { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { SiTelegram } from "react-icons/si";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y5iqn1q",
        "template_xwmytgu",
        form.current,
        "8pE_b2M_A4RetZPyb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dimasoroka17@gmail.com</h5>
            <a href="mailto:dimasoroka17@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiLinkedinBoxFill className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>dmytro-soroka-isorkai</h5>
            <a href="mailto:dimasoroka17@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <SiTelegram className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>@Sorka17</h5>
            <a href="https://t.me/Sorka17">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { SiTelegram } from "react-icons/si";
export const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail />
            <h4>Email</h4>
            <h5>dimasoroka17@gmail.com</h5>
            <a href="mailto:dimasoroka17@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiLinkedinBoxFill />
            <h4>Linkedin</h4>
            <h5>dmytro-soroka-isorkai</h5>
            <a href="mailto:dimasoroka17@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <SiTelegram />
            <h4>Telegram</h4>
            <h5>@Sorka17</h5>
            <a href="https://t.me/Sorka17">Send a message</a>
          </article>
        </div>

        <form action=""></form>
      </div>
    </section>
  );
};

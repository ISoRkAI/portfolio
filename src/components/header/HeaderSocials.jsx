import { BsLinkedin, BsGithub, BsDribbble } from "react-icons/bs";

export const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <BsGithub />
      </a>
      <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
        <BsDribbble />
      </a>
    </div>
  );
};
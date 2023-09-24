import { BsLinkedin, BsGithub, BsTelegram } from 'react-icons/bs';

export const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://linkedin.com/in/dmytro-soroka-isorkai"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/ISoRkAI"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
      <a href="https://t.me/Sorka17/" target="_blank" rel="noopener noreferrer">
        <BsTelegram />
      </a>
    </div>
  );
};

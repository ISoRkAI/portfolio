import IMG1 from '../../assets/Screen1.png';
import IMG2 from '../../assets/Screen2.png';
import IMG3 from '../../assets/Screen3.png';
import IMG4 from '../../assets/Screen4.png';
import IMG5 from '../../assets/Screen5.png';
import IMG6 from '../../assets/Screen6.png';
import IMG7 from '../../assets/Screen7.png';
import IMG8 from '../../assets/Screen8.png';
import './portfolio.css';

const portfolios = [
  {
    id: 1,
    image: IMG1,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 7,
    image: IMG7,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 8,
    image: IMG8,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
  {
    id: 9,
    image: IMG8,
    title: 'Lorem ipsum dolor sit amet consectetur.',
    github: 'https://github.com',
    demo: 'https://github.com',
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <ul className="container portfolio__container">
        {portfolios.map(({ id, image, title, github, demo }) => {
          return (
            <li key={id}>
              <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

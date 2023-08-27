import IMG1 from "../../assets/portfolio1.jpg";

import "./portfolio.css";

const portfolios = [
  {
    id: 1,
    image: IMG1,
    title: "Lorem ipsum dolor sit amet consectetur.",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: IMG1,
    title: "Lorem ipsum dolor sit amet consectetur.",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 3,
    image: IMG1,
    title: "Lorem ipsum dolor sit amet consectetur.",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 4,
    image: IMG1,
    title: "Lorem ipsum dolor sit amet consectetur.",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 5,
    image: IMG1,
    title: "Lorem ipsum dolor sit amet consectetur.",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 6,
    image: IMG1,
    title: "Lorem ipsum dolor sit amet consectetur.",
    github: "https://github.com",
    demo: "https://github.com",
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

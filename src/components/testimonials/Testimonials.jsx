import Pagination from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import AVA from "../../assets/avatar1.jpg";

import "./testimonials.css";

const data = [
  {
    id: 1,
    avatar: AVA,
    name: "Ernest",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam natus animi quod tempore dolor quia iure blanditiis nisi? Explicabo, similique nobis magni dolorem quis tempora amet delectus reprehenderit iusto nostrum?",
  },
  {
    id: 2,
    avatar: AVA,
    name: "Ernest",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam natus animi quod tempore dolor quia iure blanditiis nisi? Explicabo, similique nobis magni dolorem quis tempora amet delectus reprehenderit iusto nostrum?",
  },
  {
    id: 3,
    avatar: AVA,
    name: "Ernest",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam natus animi quod tempore dolor quia iure blanditiis nisi? Explicabo, similique nobis magni dolorem quis tempora amet delectus reprehenderit iusto nostrum?",
  },
  {
    id: 4,
    avatar: AVA,
    name: "Ernest",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam natus animi quod tempore dolor quia iure blanditiis nisi? Explicabo, similique nobis magni dolorem quis tempora amet delectus reprehenderit iusto nostrum?",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={Pagination}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, avatar, name, review }) => {
          return (
            <li key={id}>
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Ernest" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            </li>
          );
        })}
      </Swiper>
    </section>
  );
};

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Team = () => {
  const teamData = [
    {
      image: "https://scallar.in/img/team-2.jpg",
      name: "Rohit Kumar",
      post: "Developer",
    },
    {
      image: "https://scallar.in/img/team-3.jpg",
      name: "Richa Kumari",
      post: "Graphic Designer",
    },
    {
      image: "https://scallar.in/img/team-4.jpg",
      name: "Vishal Kumar",
      post: "Digital Marketing",
    },
    {
      image: "https://scallar.in/img/team-2.jpg",
      name: "Deepanshu Kumar",
      post: "Co Founder",
    },
  ];

  return (
    <div className="px-12 my-14">
      <div className="font-bold text-center">
        <p className="text-xl text-primary">Our Team</p>
        <h3 className="text-4xl">Meet our expert Team</h3>
      </div>
      <div className="">
        <Swiper
          className=""
          modules={[Pagination, Autoplay, EffectCoverflow]}
          loop={true}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          effect="coverflow"
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
            850: {
              slidesPerView: 3,
            },
          }}
        >
          {teamData.map((ele, id) => (
            <SwiperSlide
              className="my-10 rounded-xl relative team-card overflow-hidden shadow-2xl h-80"
              key={id}
            >
              <img
                src={ele.image}
                alt=""
                className="rounded-xl w-full team-card-image"
              />
              <div className="absolute -bottom-36 bg-slate-200 px-2 py-4 rounded-xl w-11/12 team-data opacity-0 shadow-lg text-center">
                <p className="font-bold text-2xl">{ele.name}</p>
                <p className="font-semibold text-xl">{ele.post}</p>
                <div className="flex justify-center items-center mt-2">
                  <span className="mx-1 text-2xl">
                    <FaFacebook />
                  </span>
                  <span className="mx-1 text-2xl">
                    <FaTwitter />
                  </span>
                  <span className="mx-1 text-2xl">
                    <FaInstagram />
                  </span>
                  <span className="mx-1 text-2xl">
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;

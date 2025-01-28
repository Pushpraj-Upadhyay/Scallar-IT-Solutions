import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".card-content", {
  modules: [Navigation, Pagination],
});

const Team = () => {
  let swiper = new Swiper(".card-content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      576: {
        slidesPerView:2,
      },
      992: {
        slidesPerView: 3,
      },
    }
  });

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
    <div className="px-12 my-14 common-padding-margin">
      <div className="font-bold text-center">
        <p className="text-xl text-primary">Our Team</p>
        <h3 className="text-4xl">Meet our expert Team</h3>
      </div>
      <div className="swiper">
        <div className="card-content">
          <div className="swiper-wrapper">
            {teamData.map((ele, id) => (
              <div
                className="swiper-slide mx-4 my-10 rounded-xl relative team-card overflow-hidden shadow-2xl h-80 w-80"
                key={id}
              >
                <img src={ele.image} alt="" className="rounded-xl w-80 team-card-image" />
                <div className="absolute -bottom-36 bg-slate-200 px-2 py-4 rounded-xl w-11/12 team-data opacity-0 shadow-lg text-center">
                  <p className="font-bold text-2xl">{ele.name}</p>
                  <p className="font-semibold text-xl">{ele.post}</p>
                  <div className="flex justify-center items-center mt-2">
                    <span className="mx-1 text-2xl"><FaFacebook/></span>
                    <span className="mx-1 text-2xl"><FaTwitter/></span>
                    <span className="mx-1 text-2xl"><FaInstagram/></span>
                    <span className="mx-1 text-2xl"><FaLinkedinIn/></span>
                  </div>
                </div>
              </div>
            ))}
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

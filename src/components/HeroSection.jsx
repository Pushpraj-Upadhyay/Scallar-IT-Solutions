import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const HeroSection = () => {
  const heroContent = [
    {
      heroImage:
        "https://media.gettyimages.com/id/1310853687/photo/shot-of-hand-businesswoman-writing-on-paper-and-using-laptop-to-searching-data-for-working.jpg?s=612x612&w=0&k=20&c=q27Oz5eW2Kdgt_MlQrY2MDHtdyLAEvIE6WB6MzJggso=",
        title: "Empowering Digital Transformation IT Solutions",
        description:"Transform your business with cutting-edge IT solution designed for success.",
    },
    {
      heroImage:
        "https://img.freepik.com/free-photo/business-person-futuristic-business-environment_23-2150970215.jpg?ga=GA1.1.87072652.1738170559&semt=ais_hybrid",
        title:"Quality Digital Services You Really Need!",
        description:"Innovating Tomorrow’s Technology, We build robust digital solutions tailored to your unique business needs.",
    },
  ];
  return (
    <div>
      <div>
        <Swiper
          className="relative"
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          loop={true}
          navigation
          autoplay={{ delay: 5000 }}
          effect="fade"
        >
          {heroContent.map((content, id) => (
            <SwiperSlide key={id}>
              <img
                src={content.heroImage}
                alt="First slide"
                className="w-full h-96 brightness-50 hero-image"
              />
              <div className="flex flex-col justify-center text-center absolute overflow-auto hero-content h-4/5 w-4/5 text-white">
                <p className="text-xl font-semibold mb-1">Best IT Solutions</p>
                <p className="text-3xl font-bold my-3">
                  {content.title}
                </p>
                <p>
                  {content.description}
                </p>
                <div className="flex justify-around mt-4">
                  <button className="px-6 py-2 text-primary relative font-semibold">
                    Read More
                  </button>
                  <button className="px-6 py-2 text-primary relative font-semibold">
                    Contact Us
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mx-4 px-12 common-padding-margin py-6 bg-primary text-white relative -top-12 z-50 rounded-xl shadow-lg shadow-violet-800 hero-content-2">
          <p className="my-4">
            <span className="font-semibold text-3xl mx-1">99%</span> Success in
            getting happy customer
          </p>
          <p className="my-4">
            <span className="font-semibold text-3xl mx-1">25</span> Thousands of
            successful business
          </p>
          <p className="my-4">
            <span className="font-semibold text-3xl mx-1">120</span> Total
            clients who love HighTech
          </p>
          <p className="my-4">
            <span className="font-semibold text-3xl mx-1">4</span> Stars reviews
            given by satisfied clients
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".card-content", {
  modules: [Navigation, Pagination],
});

const Testimonials = () => {
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
  const reviewReport = [
    {
      reviewerName: "Raj Mohan",
      reviewerPost: "founder of JMK  Solutions",
      reviewerImage: "https://scallar.in/img/testimonial-4.jpg",
      rating: "",
      description:
        "Outstanding Google Ads Management! - This Google Ads service has transformed our digital marketing strategy. They took the time to understand our business goals and created highly targeted ads that brought in quality leads from day one. The ROI has been fantastic, and we’ve seen a dramatic increase in website traffic and conversions. Their team is knowledgeable, proactive, and consistently optimizes the campaigns to ensure we’re getting the best results. If you’re looking to boost your online presence, I can’t recommend them enough!",
    },
    {
      reviewerName: "Rajkumar",
      reviewerPost: "Founder of jmk solutions",
      reviewerImage: "https://scallar.in/img/testimonial-2.jpg",
      rating: "",
      description:
        "Outstanding Google Ads Management! - This Google Ads service has transformed our digital marketing strategy. They took the time to understand our business goals and created highly targeted ads that brought in quality leads from day one. The ROI has been fantastic, and we’ve seen a dramatic increase in website traffic and conversions. Their team is knowledgeable, proactive, and consistently optimizes the campaigns to ensure we’re getting the best results. If you’re looking to boost your online presence, I can’t recommend them enough!",
    },
    {
      reviewerName: "Raj Mohan",
      reviewerPost: "founder of JMK  Solutions",
      reviewerImage: "https://scallar.in/img/testimonial-4.jpg",
      rating: "",
      description:
        "Outstanding Google Ads Management! - This Google Ads service has transformed our digital marketing strategy. They took the time to understand our business goals and created highly targeted ads that brought in quality leads from day one. The ROI has been fantastic, and we’ve seen a dramatic increase in website traffic and conversions. Their team is knowledgeable, proactive, and consistently optimizes the campaigns to ensure we’re getting the best results. If you’re looking to boost your online presence, I can’t recommend them enough!",
    },
    {
      reviewerName: "Raj Mohan",
      reviewerPost: "founder of JMK  Solutions",
      reviewerImage: "https://scallar.in/img/testimonial-2.jpg",
      rating: "",
      description:
        "Outstanding Google Ads Management! - This Google Ads service has transformed our digital marketing strategy. They took the time to understand our business goals and created highly targeted ads that brought in quality leads from day one. The ROI has been fantastic, and we’ve seen a dramatic increase in website traffic and conversions. Their team is knowledgeable, proactive, and consistently optimizes the campaigns to ensure we’re getting the best results. If you’re looking to boost your online presence, I can’t recommend them enough!",
    },
  ];

  return (
    <div className="px-12 my-14 common-padding-margin">
      <div className="font-bold text-center my-4">
        <p className="text-2xl text-primary">Our Testimonials</p>
        <h3 className="text-4xl">Our Client Saying!</h3>
      </div>
      <div className="swiper">
        <div className="card-content">
          <div className="swiper-wrapper review-card-container">
            {reviewReport.map((review, id) => (
              <div
                className="swiper-slide p-4 rounded-lg bg-slate-200 mx-1"
                key={id}
              >
                <div className="py-4 flex items-center">
                  <img src={review.reviewerImage} alt="" className="h-20 w-20 mr-3"/>
                  <div className="">
                    <p className="text-xl font-semibold">
                      {review.reviewerName}
                    </p>
                    <p className="font-medium">{review.reviewerPost}</p>
                    <p>{review.rating}</p>
                  </div>
                </div>
                <hr />
                <p className="py-4 text-gray-600">{review.description}</p>
              </div>
            ))}
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

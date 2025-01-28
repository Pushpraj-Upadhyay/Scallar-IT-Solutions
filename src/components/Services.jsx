import {
  FaCode,
  FaFileCode,
  FaExternalLinkAlt,
  FaLaptop,
  FaEnvelopeOpen,
  FaUserSecret,
} from "react-icons/fa";

const Services = () => {
  const allServices = [
    {
      image: <FaCode className="h-32 w-32 text-blue-800" />,
      title: "Web Design",
      description:
        "User-Friendly Navigation: A simple, intuitive menu structure helps users find content quickly. This includes a clear menu bar with categories like Home, About, Blog Posts, Categories, Contact, and Search.",
    },
    {
      image: <FaFileCode className="h-32 w-32 text-blue-800" />,
      title: "Managed IT Services",
      description:
        "Our managed IT services are designed to take the burden of IT maintenance off your shoulders. We monitor, manage, and optimize your IT infrastructure, so you can focus on running your business. ",
    },
    {
      image: <FaExternalLinkAlt className="h-32 w-32 text-blue-800" />,
      title: "Web & Mobile App Development",
      description:
        "We create responsive, user-friendly websites and mobile applications that engage your customers and drive conversions. Our design and development approach ensures seamless performance across all devices.",
    },
    {
      image: <FaUserSecret className="h-32 w-32 text-blue-800" />,
      title: "Custom Software Development",
      description:
        "We build intuitive and scalable software solutions that align perfectly with your business requirements. Our development team ensures that the applications we create are secure, flexible, and future-proof.",
    },
    {
      image: <FaEnvelopeOpen className="h-32 w-32 text-blue-800" />,
      title: "IT Consulting & Strategy",
      description:
        "We offer comprehensive IT consulting services, helping businesses develop robust IT strategies that drive growth, reduce costs, and enhance productivity.",
    },
    {
      image: <FaLaptop className="h-32 w-32 text-blue-800" />,
      title: "Cybersecurity & Data Protection",
      description:
        "Protect your business from cyber threats with our advanced cybersecurity solutions. We implement proactive measures to safeguard your sensitive data and ensure compliance with industry standards.",
    },
  ];

  return (
    <div className="px-12 my-14 common-padding-margin">
      <div className="font-bold text-center my-4">
        <p className="text-2xl text-primary">Our Services</p>
        <h3 className="text-4xl">
          Services Built Specifically For Your Business
        </h3>
      </div>
      <div className="flex flex-wrap justify-around">
        {allServices.map((service, id) => (
          <div className="my-6 service-card h-64 w-full" key={id}>
            <div className="relative h-64 service-card-inner">
              <div className="flex flex-col justify-center items-center absolute top-0 h-full w-full p-2 service-card-front rounded-xl">
                {service.image}
                <h4 className="text-center text-2xl font-semibold my-2">
                  {service.title}
                </h4>
              </div>
              <div className="flex flex-col justify-center items-center absolute top-0 h-full w-full p-2 service-card-back bg-slate-200 rounded-xl">
                <p className="text-gray-600 my-2 text-center">
                  {service.description}
                </p>
                <button className="px-6 py-2 text-primary relative font-semibold">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

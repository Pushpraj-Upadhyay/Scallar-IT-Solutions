const AboutUs = () => {
  return (
    <div className="px-12 my-14 flex justify-around about-us items-center common-padding-margin">
      <div className="relative p-10 about-us-image h-96 w-96 m-4">
        <img src="https://scallar.in/img/about-1.jpg" alt="" className="h-60 w-72 absolute top-0 left-0 rounded-lg"/>
        <img src="https://scallar.in/img/about-2.jpg" alt="" className="h-60 w-72 absolute bottom-0 right-0 rounded-lg"/>
      </div>
      <div>
        <div className="font-bold text-center w-full">
          <p className="text-2xl text-primary">About Us</p>
          <h3 className="text-3xl">About Scallar IT Solutions</h3>
        </div>
        <div>
          <p className="my-3 text-gray-600">
            At Scallar, we are a leading IT solutions agency committed to
            driving innovation and delivering tailored technology services to
            businesses of all sizes. With a dedicated team of experienced
            professionals, we specialize in helping organizations navigate the
            ever-evolving digital landscape by providing custom software
            development, IT infrastructure management, cloud solutions, and
            cybersecurity.
          </p>
          <p className="my-6 text-gray-600">
            Our passion lies in solving complex IT challenges, ensuring smooth
            and efficient operations, and enabling businesses to reach new
            heights of success through technology. Whether you’re looking to
            optimize your processes, develop new applications, or secure your
            data, we have the expertise to turn your vision into reality.
          </p>
          <button className="px-6 py-2 text-primary relative font-semibold">
            More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

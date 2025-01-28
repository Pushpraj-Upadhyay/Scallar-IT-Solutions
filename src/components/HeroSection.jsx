const HeroSection = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="First slide"
            className="w-full h-96 brightness-50 hero-image"
          />
          <div className="flex flex-col justify-center text-center absolute overflow-auto hero-content h-4/5 w-4/5 text-white">
            <p className="text-xl font-semibold mb-1">Best IT Solutions</p>
            <p className="text-3xl font-bold my-3">Quality Digital Services You Really Need!</p>
            <p>Transform your business with cutting-edge IT solutions designed for success.</p>
            <div className="flex justify-around mt-4">
                <button className="px-6 py-2 text-primary relative font-semibold">Read More</button>
                <button className="px-6 py-2 text-primary relative font-semibold">Contact Us</button>
            </div>
          </div>
        </div>
        <div className="mx-4 px-12 common-padding-margin py-6 bg-primary text-white relative -top-12 rounded-xl shadow-lg shadow-violet-800 hero-content-2">
            <p className="my-4"><span className="font-semibold text-3xl mx-1">99%</span> Success in getting happy customer</p>
            <p className="my-4"><span className="font-semibold text-3xl mx-1">25</span> Thousands of successful business</p>
            <p className="my-4"><span className="font-semibold text-3xl mx-1">120</span> Total clients who love HighTech</p>
            <p className="my-4"><span className="font-semibold text-3xl mx-1">4</span> Stars reviews given by satisfied clients</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useRef } from "react";

const FeedbackForm = () => {
  const inputName = useRef();
  const inputMail = useRef();
  const inputProject = useRef();
  const inputMessage = useRef();
  const handleSubmitEvent = (event) => {
    alert("Form Submitted!");
  }
  return (
    <div className="px-12 my-14 common-padding-margin">
      <div className="font-bold text-center my-4">
        <p className="text-2xl text-primary">Get in touch</p>
        <h3 className="text-4xl">Contact for any Query</h3>
      </div>
      <div className="flex flex-wrap justify-around">
        <div className="px-2 py-1 rounded-xl my-6 contact-details flex flex-col justify-around w-full shadow-xl bg-slate-200">
          <div className="bg-white px-2 py-1 my-1 rounded-xl font-semibold flex items-center">
            <div className="m-4 text-3xl text-blue-800">
              <FaLocationDot />
            </div>
            <div>
              <p className="text-2xl text-blue-800">Address</p>
              <p>164 - saral jullena new friends colony delhi 110025</p>
            </div>
          </div>
          <div className="bg-white px-2 py-1 my-1 rounded-xl font-semibold flex items-center">
            <div className="m-4 text-3xl text-blue-800">
              <FaPhone />
            </div>
            <div>
              <p className="text-2xl text-blue-800">Contact</p>
              <p>+918449820270</p>
            </div>
          </div>
          <div className="bg-white px-2 py-1 my-1 rounded-xl font-semibold flex items-center">
            <div className="m-4 text-3xl text-blue-800">
              <IoIosMail />
            </div>
            <div>
              <p className="text-2xl text-blue-800">Email</p>
              <p>Info@scallar.in</p>
            </div>
          </div>
        </div>
        <div className="px-2 py-1 rounded-xl my-6 feedback-form bg-slate-200 shadow-xl">
          <form action="" onSubmit={handleSubmitEvent}>
            <input
              type="text"
              name=""
              id=""
              placeholder="Your Name"
              className="w-full p-2 my-1 rounded-lg"
              ref={inputName}
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Your Email"
              className="w-full p-2 my-1 rounded-lg"
              ref={inputMail}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Project"
              className="w-full p-2 my-1 rounded-lg"
              ref={inputProject}
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Message"
              className="w-full p-2 my-1 rounded-lg"
              ref={inputMessage}
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 text-primary relative font-semibold hover:bg-primary"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;

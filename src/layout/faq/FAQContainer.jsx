import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import faqs from "../../apis/FAQ_api.js";
import Container from "../Container.jsx";

const FAQContainer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Container>
      <div className="container w-full mx-auto py-10">
        <div className="my-10">
          <h2 className="text-4xl font-bold text-center py-4">F.A.Q</h2>
          <p className="text-lg font-bold text-center ">
            GUIDE RELATED TO OUR ONLINE COURSES & CLASSES
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-2 border-gray-300 rounded-lg overflow-hidden ${
                activeIndex === index
                  ? "bg-b3843c text-white font-bold"
                  : "bg-white"
              }`}
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="flex items-center gap-4 p-4 cursor-pointer"
              >
                <span
                  className={`transition-transform ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {activeIndex === index ? (
                    <FaMinus className="text-2xl " />
                  ) : (
                    <IoMdAdd className="text-2xl text-b3843c" />
                  )}
                </span>
                <h3
                  className={` ${
                    activeIndex === index
                      ? "text-white"
                      : "text-black font-bold"
                  }`}
                >
                  {faq.question}
                </h3>
              </div>
              {activeIndex === index && (
                <div className="mt-2 mb-4 px-4 text-sm">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FAQContainer;

import "../contactForm/ContactForm.css";
import Container from "../Container";
import bgImg from "../../assets/bgImg.jpg"

const FormContainer = () => {
  return (

    <div
      className="relative  w-full bg-cover bg-center py-[4%]"
      style={{
        backgroundImage: `url(${bgImg})`, // Replace this URL with your image URL
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      {/* Constrained container */}
      <Container>
        <div className="relative z-10 max-w-7xl flex flex-col lg:flex-row items-center gap-8">
          {/* Heading Section */}
          <div className="text-container w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-snug tracking-wide">
              Learn Quran Online From Every Part Of The World
            </p>
          </div>

          {/* Form Section */}
          <div className="form-container w-full lg:w-1/2">
            <div className="bg-b3843c rounded-2xl shadow-lg p-6 sm:p-8 md:px-6 md:py-4 lg:p-6">
              {/* Heading */}
              <div className="form-headContainer text-center mb-6">
                <h1 className="text-3xl lg:text-4xl font-bold text-white">
                  3 Free Trial Classes
                </h1>
                <h2 className="text-sm lg:text-lg font-semibold text-white mt-2">
                  Book Your Trial For Student Satisfaction
                </h2>
              </div>

              {/* Form */}
              <form className="space-y-4">
                {/* Input Fields */}
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 focus:ring-2 focus:ring-b3843c focus:outline-none"
                  />
                  <input
                    type="number"
                    placeholder="Phone/WhatsApp"
                    required
                    className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 focus:ring-2 focus:ring-b3843c focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 focus:ring-2 focus:ring-b3843c focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Country"
                    required
                    className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 focus:ring-2 focus:ring-b3843c focus:outline-none"
                  />
                  <textarea
                    placeholder="Message"
                    required
                    className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 focus:ring-2 focus:ring-b3843c focus:outline-none h-32 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white font-semibold text-lg py-3 rounded-md shadow-md hover:bg-gray-950 focus:ring-2 focus:ring-gray-900 focus:outline-none"
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FormContainer;

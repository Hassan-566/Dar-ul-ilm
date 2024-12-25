const ContactForm = ({
  // General Form Styles
  bgColor = "#b3843c",
  containerStyles = "",
  formStyles = "",
  // Headings
  heading = "3 Free Trial Classes",
  subheading = "Book Your Trial For Student Satisfaction",
  headingStyles = "",
  subheadingStyles = "",
  // Form Input and Button Styles
  inputStyles = "",
  textareaStyles = "",
  buttonText = "Book Now",
  buttonStyles = "",
  // Responsive Customization
  responsiveClasses = "",
}) => {
  return (
    <div
      className={`form-parent flex justify-center w-full ${responsiveClasses}`}
    >
      <div
        className={`form-container w-full max-w-[98%] rounded-2xl ${formStyles}`}
        style={{ backgroundColor: bgColor }}
      >
        {/* Heading */}
        <div
          className={`form-headContainer text-center mb-6 ${containerStyles}`}
        >
          <h1
            className={`text-3xl lg:text-4xl font-bold tracking-tight ${headingStyles}`}
          >
            {heading}
          </h1>
          <h2
            className={`text-sm lg:text-lg font-semibold mt-2 ${subheadingStyles}`}
          >
            {subheading}
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-4 md:space-y-6 lg:space-y-4">
          {/* Input Fields */}
          <div className="space-y-4 md:space-y-3 lg:space-y-5">
            <input
              type="text"
              placeholder="Name"
              required
              className={`block w-full rounded-md px-4 py-2 text-gray-800 focus:ring-2 focus:ring-black focus:outline-none ${inputStyles}`}
            />
            <input
              type="number"
              placeholder="Phone/WhatsApp"
              required
              className={`block w-full rounded-md px-4 py-2 text-gray-800 focus:ring-2 focus:ring-black focus:outline-none ${inputStyles}`}
            />
            <input
              type="email"
              placeholder="Email"
              required
              className={`block w-full rounded-md px-4 py-2 text-gray-800 focus:ring-2 focus:ring-black focus:outline-none ${inputStyles}`}
            />
            <input
              type="text"
              placeholder="Country"
              required
              className={`block w-full rounded-md px-4 py-2 text-gray-800 focus:ring-2 focus:ring-black focus:outline-none ${inputStyles}`}
            />
            <textarea
              placeholder="Message"
              required
              className={`block w-full rounded-md px-4 py-2 text-gray-800 focus:ring-2 focus:ring-black focus:outline-none h-32 resize-none ${textareaStyles}`}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className={`px-[20px] font-semibold text-lg py-3 rounded-md hover:bg-gray-800 focus:ring-2 focus:ring-black focus:outline-none ${buttonStyles}`}
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

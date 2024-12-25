import PageName from "../layout/pageName/PageName";
import Container from "../layout/Container";
import ContactForm from "../layout/contactForm/ContactForm";
import {
  FaHome,
  FaPhone,
  FaWhatsapp,
  FaTelegram,
  FaSkype,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <PageName text="CONTACT US" />
      <Container>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-[90%] h-auto ">
          {/* Contact Form */}
          <div className="lg:col-span-2 h-[90%]">
            <ContactForm
              bgColor=""
              heading="Get in Touch"
              subheading="We'd love to hear from you!"
              formStyles="my-6 p-4 lg:p-6 h-full border-2 border-b3843c"
              headingStyles="text-2xl lg:text-3xl font-bold text-b3843c"
              subheadingStyles="text-sm lg:text-base text-gray-900 mt-2"
              inputStyles="text-gray-800 border-2 border-b3843c"
              buttonText="Send Message"
              buttonStyles="bg-b3843c hover:bg-blue-700 text-white"
              containerStyles=""
              textareaStyles="border-2 border-b3843c"
              responsiveClasses=""
            />
          </div>

          <div className="contact-section p-7 mt-8 max-w-md mx-auto">
            {/* Heading */}
            <h2 className="text-xl font-bold text-orange-600 mb-4">
              Contact Details
            </h2>

            {/* Contact Details List */}
            <ul className="space-y-4 text-gray-800">
              {/* Address */}
              <li className="flex items-center space-x-4">
                <FaHome className="text-2xl md:text-3xl text-gray-600" />
                <span>Dar Al Ilm Academy Lahore, Pakistan</span>
              </li>

              {/* Phone */}
              <li className="flex items-center space-x-4">
                <FaPhone className="text-2xl md:text-3xl text-gray-600" />
                <span>+92307 412 8241</span>
              </li>

              {/* WhatsApp */}
              <li className="flex items-center space-x-4">
                <FaWhatsapp className="text-2xl md:text-3xl text-green-500" />
                <span>+92341 204 0566</span>
              </li>

              {/* Telegram */}
              <li className="flex items-center space-x-4">
                <FaTelegram className="text-2xl md:text-3xl text-blue-500" />
                <span>+92341 204 0566</span>
              </li>

              {/* Skype */}
              <li className="flex items-center space-x-4">
                <FaSkype className="text-2xl md:text-3xl text-blue-600" />
                <span>DarAlIlm</span>
              </li>

              {/* Email */}
              <li className="flex items-center space-x-4">
                <FaEnvelope className="text-2xl md:text-3xl text-gray-600" />
                <span>daralilmacademy@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;

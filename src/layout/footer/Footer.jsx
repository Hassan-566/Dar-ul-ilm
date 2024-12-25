// import footer_logo from "../../assets//FooterLogo.png";
import Container from "../Container.jsx";

const Footer = () => {
  return (
    <footer className="bg-b3843c text-white py-10">
      <Container>
        <div className="w-full mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-14">
            <div>
              <h2 className="text-2xl font-bold mb-4">RAREBLOCKS</h2>
              <p className="text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
                sodales in volutpat ullamcorper amet adipiscing fermentum.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Career
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Help</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Customer Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Delivery Details
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Free eBooks
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Development Tutorial
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    How to - Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    YouTube Playlist
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-white/20 pt-4 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm">
              &copy; Copyright 2022. All Rights Reserved
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:scale-110 transition"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:scale-110 transition"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:scale-110 transition"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:scale-110 transition"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

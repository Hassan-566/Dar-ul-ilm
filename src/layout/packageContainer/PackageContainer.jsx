import plans from "../../apis/Plans_api.js";
import { BsCheckCircle } from "react-icons/bs";
import Container from "../Container.jsx";

const PackageContainer = ({
  heading = "",
  subheading = "",
  headingStyles = "",
  subheadingStyles = "",
}) => {
  return (
    <Container>
      <div className="container w-[90%]  mx-auto my-16 ">
        <div className="font-bold text-3xl text-center pt-12 pb-5 my-6 ">
          MONTHLY FEE (HADIA)
          {heading && (
            <div className={`mt-4 ${headingStyles}`}>
              {heading}
            </div>
          )}
          {subheading && (
            <div className={`mt-2 ${subheadingStyles}`}>
              {subheading}
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 ">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="border-2 border-gray-300 rounded-lg hover:shadow-lg p-8 text-center hover:text-white group hover:bg-b3843c hover:ease-in-out duration-300 hover:scale-105 transition-transform"
            >
              <div className="text-b3843c group-hover:text-white text-4xl mb-4">
                <span className="inline-block ">
                  <BsCheckCircle />
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">{plan.country}</h3>
              <p className="text-b3843c group-hover:text-white text-2xl font-bold">
                {plan.price}
                <span className="text-gray-900 group-hover:text-white text-sm font-normal">
                  /Per Month
                </span>
              </p>
              <ul className="my-10 text-left">
                {plan.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between text-gray-900 group-hover:text-white mb-3"
                  >
                    {detail}
                    <span>
                      <BsCheckCircle className="text-b3843c group-hover:text-white" />
                    </span>
                  </li>
                ))}
              </ul>
              <button className="bg-b3843c group-hover:bg-white text-white group-hover:text-b3843c font-medium py-2 px-4 rounded hover:bg-opacity-80">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PackageContainer;

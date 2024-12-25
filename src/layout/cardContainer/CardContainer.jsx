import CardApi from "../../apis/Cards_api.js";
import Container from "../Container.jsx";
import "../card/Card.css";

const CardContainer = () => {
  return (
    // <div className="card-parentContainer flex flex-col justify-center items-center px-[2%] pb-[5%] max-w-full">
    //   <h1 className="CardConatiner-text text-4xl font-bold text-center py-[10%] ">
    //     Our Courses
    //   </h1>
    <div className="w-full py-10 bg-gray-50">
      {/* Use the reusable Container component */}
      <Container>
        {/* Title Section (optional) */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            OUR COURSES
          </h1>
          {/* <p className="text-sm md:text-lg text-gray-600 mt-2">
              Explore our offerings and services in detail.
            </p> */}
        </div>

        {/* Card Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ">
          {CardApi.map((item) => (
            <div
              className="card-container bg-white hover:bg-b3843c group rounded-lg border-2 border-gray-300 hover:border-b3843c overflow-hidden hover:shadow-xl duration-300 hover:scale-105 transition-transform hover:ease-in-out"
              key={item.id}
            >
              {/* Image Section */}
              <div className="img-content b">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[150px] object-cover rounded-none"
                />
              </div>

              {/* Content Section */}
              <div className="content p-5 ">
                <h2 className="heading text-xl font-bold text-gray-800 mb-2 group-hover:text-white">
                  {item.title}
                </h2>
                <p className="desc text-sm text-gray-600 group-hover:text-white hover:ease-in-out duration-100">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
    // </div>
  );
};

export default CardContainer;

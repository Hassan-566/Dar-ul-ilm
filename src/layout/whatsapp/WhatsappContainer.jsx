import Container from "../Container.jsx";


const WhatsappContainer = () => {
  return (
    <div className="bg">
      <Container>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-5 items-center py-12 my-6">
        <div className="flex justify-center items-center lg:justify-end text-white text-center text-xl md:text-2xl font-semibold tracking-wide leading-8  ">
          <span className="w-[90%] md:w-full pb-5"> Contact us on WhatsApp for trial classes</span>
        </div>
        <a
          href="https://wa.me/+923412040566"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center"
        >
          <button className="text-white hover:text-b3843c font-bold hover:font-bold  bg-b3843c hover:bg-white py-4 rounded-lg text-lg md:text-xl hover:ease-in-out duration-100 w-[80%] md:w-[65%] lg:w-[60%]">
            WhatsApp Now
          </button>
          {/* <p className="text-white text-center text-3xl font-semibold p-4"> Click here</p> */}
        </a>
      </div>
      </Container>
    </div>
  );
};

export default WhatsappContainer;

// https://wa.me/+923138581672

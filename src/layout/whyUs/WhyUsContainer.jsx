import { BsPersonCheckFill } from "react-icons/bs";
import { HiMiniUserGroup } from "react-icons/hi2";
import { PiClockCountdownBold } from "react-icons/pi";
import Container from "../Container.jsx";

const WhyUsContainer = () => {
  return (
    <div className="w-full flex flex-col items-center ">
      <Container>
        <div className="mt-7">
          <div className="text-3xl md:text-4xl font-bold text-center">THIS IS WHY</div>
          <p className="text-lg text-center my-7 text-gray-700 opacity-80">
            WE ARE DIFFERENT
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center justify-center p-1">
            <BsPersonCheckFill className="text-6xl text-b3843c" />
            <h3 className="text-xl font-bold mt-3">One-on-One Classes</h3>
            <p className="text-center mt-5 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, eligendi voluptate eum accusamus alias debitis quas
              ipsam totam quam consectetur eos cumque est eius veritatis
              sapiente! Atque aut impedit quae?
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-1">
            <HiMiniUserGroup className="text-6xl text-b3843c" />
            <h3 className="text-xl font-bold mt-3">Male & Female Teachers</h3>
            <p className="text-center mt-5 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, eligendi voluptate eum accusamus alias debitis quas
              ipsam totam quam consectetur eos cumque est eius veritatis
              sapiente! Atque aut impedit quae?
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-1">
            <PiClockCountdownBold className="text-6xl text-b3843c" />
            <h3 className="text-xl font-bold mt-3">Flexible Timings</h3>
            <p className="text-center mt-5 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, eligendi voluptate eum accusamus alias debitis quas
              ipsam totam quam consectetur eos cumque est eius veritatis
              sapiente! Atque aut impedit quae?
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyUsContainer;
{
  /* <BsPersonCheckFill className='w-20 h-20 ml-56 text-b3843c' /> */
}

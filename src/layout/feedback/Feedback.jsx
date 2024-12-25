// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../feedback/Feedback.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Container from "../Container.jsx";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import feedback from "../../apis/Feedback_api.js";

const Feedback = () => {
  return (
    <div className="bg-black">
      <Container>
        <div className="bg-black text-3xl md:text-5xl text-center pt-14 pb-8 font-bold text-b3843c ">
          Students Feedback
        </div>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} bg-gray-300 w-3 h-3 rounded-full transition-all duration-300 swiper-pagination-bullet-custom"></span>`,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full"
        >
          {feedback.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex-col justify-items-center mb-12"
            >
              <div className="py-4 text-2xl w-full font-medium">
                {item.comment}
              </div>
              <div className=" font-bold text-xl py-2">{item.name}</div>
              <div className="text-xl text-b3843c pb-10">{item.country}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Feedback;

import Container from "../Container";
import "./PageName.css";
import { RxDividerHorizontal } from "react-icons/rx";

const PageName = ({text=""}) => {
  return (
    <div className="w-full bg-cover bg-center py-[4%] bg">
      <Container>
        <div className=" w-full items-center py-2 flex justify-center lg:justify-center text-white text-center  font-semibold tracking-wide leading-8 flex-col gap-3 md:gap-5">
          <div className="font-bold text-2xl md:text-4xl lg:text-5xl">{text}</div>
          <div className="w-32 md:w-48 lg:w-60 h-1 bg-white rounded-2xl ">
            <RxDividerHorizontal className="w-full h-full" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PageName;

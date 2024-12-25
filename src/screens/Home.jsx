import "../css/HomeCss.css";
import CardContainer from "../layout/cardContainer/CardContainer";
import FormContainer from "../layout/formContainer/FormContainer";
import WhyUsContainer from "../layout/whyUs/WhyUsContainer";

import PackageContainer from "../layout/packageContainer/PackageContainer";
// import WhatsappContainer from "../layout/WhatsappContainer";
// import FAQContainer from "../layout/FAQContainer";
// import Feedback from "../layout/Feedback";
// import Footer from "../layout/Footer";
const Home = () => {
  return (
    <div>
      <FormContainer/>
      <CardContainer/>
      <WhyUsContainer/>
      <PackageContainer/>
      {/* <WhatsappContainer/>
      <FAQContainer/>
      <Feedback/>
      <Footer/> */}
    </div>
  );
};

export default Home;

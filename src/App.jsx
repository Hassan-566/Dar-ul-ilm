import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/navbar/Navbar";
import Feedback from "./layout/feedback/Feedback";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Fee from "./screens/Fee";
import Courses from "./screens/Courses";
import WhatsappContainer from "./layout/whatsapp/WhatsappContainer";
import FAQContainer from "./layout/faq/FAQContainer";
import "./App.css"
import Footer from "./layout/footer/Footer";

function App() {
  return (
    <Router>
      <div className="bg-gray-50">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fee" element={<Fee />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
        <WhatsappContainer />
        <FAQContainer />
        <Feedback />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

import Header from "./components/landing-page/Header";
import AboutUS from "./components/landing-page/AboutUS.jsx";
import Features from "./components/landing-page/Features";
import Works from "./components/landing-page/Works";
import Testimonials from "./components/landing-page/Testionials";
import Contact from "./components/landing-page/Contact";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Footer from "./components/landing-page/Footer";

const App = () => {
  return (
    <>
      <Header />
      <AboutUS />
      <Features />
      <Works />
      <Testimonials />
      <Contact />
      <LoginForm />
      <RegisterForm />
      <Footer />
    </>
  )
}

export default App;
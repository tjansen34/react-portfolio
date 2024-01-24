import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import ContactForm from "./pages/ContactUs";

function App() {
  return (
    <div className="portfolio-app">
      <Nav />
      <Outlet />
      <ContactForm />
    </div>
  );
}

// function Contact(){
//   return(
//     <div className='contact-form'>
//     <ContactForm />
//     </div>
//   )
// }
export default App
